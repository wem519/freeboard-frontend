import {
  Wrapper,
  SearchWrapper,
  SearchTitle,
  SearchDate,
  SearchButton,
  Board,
  Row,
  ColumnNumber,
  ColumnTitleHeader,
  ColumnWriter,
  ColumnDate,
  ColumnTitle,
  NumberWrapper,
  Previos,
  Next,
  Number,
  FooterWrapper,
  BoardSummit,
} from "../list/BoardList.styles";

export default function BoardListUI(props) {
  return (
    <Wrapper>
      <SearchWrapper>
        <SearchTitle placeholder="제목을 검색해 주세요"></SearchTitle>
        <SearchDate></SearchDate>
        <SearchButton>검색하기</SearchButton>
      </SearchWrapper>
      <Board>
        <Row>
          <ColumnNumber>번호</ColumnNumber>
          <ColumnTitleHeader>제목</ColumnTitleHeader>
          <ColumnWriter>작성자</ColumnWriter>
          <ColumnDate>작성일</ColumnDate>
        </Row>
        {/* <div></div> */}
        {props.data?.fetchBoards.map((el, index) => (
          <Row key={el._id}>
            <ColumnNumber>{index}</ColumnNumber>
            <ColumnTitle id={el._id} onClick={props.onClickMoveToBoardDetail}>
              {e0l.title}
            </ColumnTitle>
            <ColumnWriter>{el.writer}</ColumnWriter>
            <ColumnDate>{el.createdAt}</ColumnDate>
          </Row>
        ))}
      </Board>
      <FooterWrapper>
        <NumberWrapper>
          <Previos src="/left.png"></Previos>
          <Number>1</Number>
          <Number>2</Number>
          <Next src="/right.png"></Next>
        </NumberWrapper>
        <BoardSummit onClick={props.onClickMoveToBoardNew}>
          게시물 등록하기
        </BoardSummit>
      </FooterWrapper>
    </Wrapper>
  );
}
