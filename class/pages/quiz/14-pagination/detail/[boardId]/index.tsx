import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      writer
      title
      contents
      createdAt
    }
  }
`;

export default function BubblingPracticePage() {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.boardId },
  });

  return (
    <>
      <div>게시판 상세페이지</div>
      <div>{data?.fetchBoard.writer}</div>
      <div>{data?.fetchBoard.title}</div>
      <div>{data?.fetchBoard.contents}</div>
    </>
  );
}
