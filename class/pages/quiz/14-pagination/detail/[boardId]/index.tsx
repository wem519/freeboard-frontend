import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router";
import styled from "@emotion/styled";

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

const Button = styled.button`
  cursor: pointer;
  :hover {
    background-color: yellow;
  }
`;

export default function BubblingPracticePage() {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.boardId },
  });

  function onClickMoveTolist() {
    router.push(`/quiz/14-pagination/boards/`);
  }

  return (
    <>
      <div>게시판 상세페이지</div>
      <div>{data?.fetchBoard.writer}</div>
      <div>{data?.fetchBoard.title}</div>
      <div>{data?.fetchBoard.contents}</div>
      <Button onClick={onClickMoveTolist}>목록보기</Button>
    </>
  );
}
