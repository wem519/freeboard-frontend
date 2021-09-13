import {
  Address,
  Wrapper,
  Headers,
  Line,
  User,
  Manage,
  Attach,
  Location,
  Name,
  Date,
  Title,
  BodyWrapper,
  ImageInput,
  TextInput,
  YoutubeInput,
  FeelingWrapper,
  Feeling,
  Good,
  GoodCount,
  Hate,
  HateCount,
  FooterWrapper,
  ListButton,
  DeleteButton,
  UpdateButton,
} from "../../../../components/units/board/detail/BoardDetail.styles";

export default function BoardDetailUI(props) {
  return (
    <div>
      <Wrapper>
        <Address />
        <Headers>
          <User src="/user.png" />
          <Manage>
            <Name>{props.data?.fetchBoard.writer}</Name>
            <Date>Date:2021.02.18</Date>
          </Manage>
          <Attach src="/attach.png" />
          <Location src="/location2.png" />
        </Headers>
        <Line />
        <Title>{props.data?.fetchBoard.title}</Title>
        <BodyWrapper>
          <ImageInput src="/image.png"></ImageInput>
          <TextInput>{props.data?.fetchBoard.contents}</TextInput>
          <YoutubeInput src="/video.png"></YoutubeInput>
        </BodyWrapper>
        <FeelingWrapper>
          <Feeling>
            <Good src="/good.png"></Good>
            <GoodCount>1920</GoodCount>
          </Feeling>
          <Feeling>
            <Hate src="/bad.png"></Hate>
            <HateCount>3920</HateCount>
          </Feeling>
        </FeelingWrapper>
      </Wrapper>
      <FooterWrapper>
        <ListButton onClick={props.onClickMoveToList}>목록으로</ListButton>
        <UpdateButton onClick={props.onClickMoveToEdit}>수정하기</UpdateButton>
        <DeleteButton
          // id={props.data?.fetchBoard._id}
          onClick={props.onClickDelete}
        >
          삭제하기
        </DeleteButton>
      </FooterWrapper>
    </div>
  );
}
