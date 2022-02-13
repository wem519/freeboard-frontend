import {
  Wrapper,
  CommentIcon,
  ContentsWrapper,
  Contents,
  BottomWrapper,
  BottomLength,
  BottomButton,
  Line,
} from "./QuestionWrite.styles";

export default function QustionWriteUI(props: any) {
  return (
    <Wrapper>
      {!props.isEdit && (
        <>
          <CommentIcon></CommentIcon>
          <div style={{ fontWeight: "bold", marginBottom: "10px" }}>
            문의하기
          </div>
        </>
      )}

      <ContentsWrapper>
        <Contents
          maxLength={100}
          placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
          onChange={props.onChangeMyContents}
          defaultValue={props.el?.contents}
        ></Contents>
        <Line></Line>
        <BottomWrapper>
          <BottomLength>0/100</BottomLength>
          <BottomButton
            id={props.el?._id}
            onClick={props.isEdit ? props.onClickUpdate : props.onClickWrite}
          >
            {props.isEdit ? "수정하기" : "등록하기"}
          </BottomButton>
        </BottomWrapper>
      </ContentsWrapper>
    </Wrapper>
  );
}
