import {
    Wrapper,
    SearchWrapper,
    SearchTitle,
    SearchDate,
    SearchButton,
    Board,
    NumberWrapper,
    Previos,
    Next,
    Number,
    FooterWrapper,
    BoardSummit
} from "../list/BoardList.styles"

export default function BoardListUI(props){
    
    return(
        <Wrapper>
            <SearchWrapper>
                <SearchTitle placeholder="제목을 검색해 주세요"></SearchTitle>
                <SearchDate></SearchDate>
                <SearchButton>검색하기</SearchButton>
            </SearchWrapper>
            <Board>
                <div></div>
                {props.data?.fetchBoards.map((el) =>(
                <Row key={el._id}>
                <div>{el.writer}</div>
                <div>{el.title}</div>
                <div>{el.createdAt}</div>
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
                <BoardSummit>게시물 등록하기</BoardSummit>
            </FooterWrapper>
        </Wrapper>
        
        

    )
}