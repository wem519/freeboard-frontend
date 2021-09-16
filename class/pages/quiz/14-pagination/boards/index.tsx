import { useQuery, gql } from "@apollo/client";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { useState } from "react";

const FETCH_BOARDS = gql`
  query fethchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
      createdAt
      contents
    }
  }
`;

const FETCH_BOARDS_COUNT = gql`
  query fetchBoardsCount {
    fetchBoardsCount
  }
`;

const Page = styled.span`
  margin: 20px;
  cursor: pointer;

  :hover {
    color: yellow;
    background-color: black;
  }
`;

const Arrow = styled.span`
  cursor: pointer;
  color: red;
`;

const Row = styled.div`
  display: flex;
`;
const Column = styled.div`
  margin: 20px;
`;

export default function PaginationPractice() {
  const router = useRouter();
  const [startPage, setStartPage] = useState(1);
  const { data, refetch } = useQuery(FETCH_BOARDS, {
    variables: { page: startPage },
  });

  const { data: dataBoardsCount } = useQuery(FETCH_BOARDS_COUNT);

  const lastPage = Math.ceil(dataBoardsCount?.fetchBoardsCount / 10);

  function onClickPage(event) {
    refetch({ page: Number(event.target.id) });
  }

  function onClickPrevPage() {
    if (startPage <= 1) return;
    setStartPage((prev) => prev - 10);
  }

  function onClickNextPage() {
    if (startPage + 10 > lastPage) return;
    setStartPage((prev) => prev + 10);
  }

  function onClickRow(event) {
    // router.push(`/quiz/14-pagination/detail/${event.currentTarget.id}`);
    // console.log(event.currentTarget.id);
    alert(event.currentTarget.id);
  }

  return (
    <>
      <div>페이지네이션 연습용</div>
      <div>
        {data?.fetchBoards.map((el) => (
          <Row key={el._id} id={el._id} onClick={onClickRow}>
            <Column>{el.writer} </Column>
            <Column>{el.title}</Column>
            <Column>{el.createdAt}</Column>
          </Row>
        ))}
      </div>
      <br />
      <Arrow onClick={onClickPrevPage}>❬</Arrow>
      {new Array(10).fill(1).map(
        (_, index) =>
          startPage + index <= lastPage && (
            <Page
              key={startPage + index}
              onClick={onClickPage}
              id={String(startPage + index)}
            >
              {startPage + index}
            </Page>
          )
      )}
      <Arrow onClick={onClickNextPage}>❭</Arrow>
    </>
  );
}

//페이지 수를 나타내는 부분에서 map(index)와 map(_, index)의 결과값이 다르게 나타남. 사용하지 않은 부분의 blur처리를 _로 한다고 하는데 어쨌든 똑같은 게 아닌가?  -->아니다

//1. fetchBoards
//    => useQuery 선언, {} 안에 data, refetch
//2. return에 fetchBoards를 불러올 부분에 map으로 출력
//    => 클릭이벤트 해당 클래스에 선언 => 클릭함수 선언
//3. boardCount 선언
//    => 이전, 다음 페이지 이동할 때 한도 없이 이어지는 무의미한 출력을 피하기 위해 전체페이지를 10으로 나눈 수를 올림해서 마지막페이지의 한계를 정하고, 시작페이지의 시작을 1로 설정해서 이전페이지의 한계를 정한다
//4. 마지막 페이지 잘라주기
//    =>페이지를 불러올 때 게시물이 있는 페이지만 출력되게  조건부 랜더링 (&&연산자)를 이용하여 조건처리
