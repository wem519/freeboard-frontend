import { gql, useQuery, useMutation } from "@apollo/client";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      likeCount
    }
  }
`;

const LIKE_BOARD = gql`
  mutation likeBoard($boardId: ID!) {
    likeBoard(boardId: $boardId)
  }
`;

export default function OptimisticUIPage() {
  const [likeBoard] = useMutation(LIKE_BOARD);
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: "616fda01b55052002a93cf77" },
  });

  const onClickLike = () => {
    likeBoard({
      variables: { boardId: "616fda01b55052002a93cf77" },
      //   refetchQueries: [
      //     {
      //       query: FETCH_BOARD,
      //       variables: { boardId: "616fda01b55052002a93cf77" },
      //     },
      //   ], // 리패치 될때까지 기다려야 함

      optimisticResponse: {
        likeBoard: data?.fetchBoard.likeCount + 1,
      },
      // 26-02-apollo-cache-state에서 한 번 했던 내용
      update(cache, { data }) {
        cache.writeQuery({
          query: FETCH_BOARD,
          variables: { boardId: "616fda01b55052002a93cf77" },
          data: {
            fetchBoard: {
              _id: "616fda01b55052002a93cf77",
              __typename: "Board",
              likeCount: data.likeBoard,
            },
          },
        });
      },
    });
  };

  return (
    <>
      <div>좋아요 개수: {data?.fetchBoard.likeCount}</div>
      <button onClick={onClickLike}>좋아요 올리기</button>
    </>
  );
}
