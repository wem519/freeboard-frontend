import {
  Wrapper,
  IconWrapper,
  Icon,
  MainWrapper,
  WriterWrapper,
  Writer,
  Star,
  Contents,
  OptionWrapper,
  UpdateIcon,
  DeleteIcon,
  DateString,
} from "../list/BoardCommentList.styles";

export default function BoardCommentListUI(props) {
  return (
    <>
      {props.data?.fetchBoardComments.map((el) => (
        <Wrapper>
          <IconWrapper>
            <Icon src="/user.png/" />
            <MainWrapper key={el._id}>
              <WriterWrapper>
                <Writer>{el?.writer}</Writer>
                <Star value={el?.rating} disabled />
              </WriterWrapper>
              <Contents>{el?.contents}</Contents>
            </MainWrapper>
            <OptionWrapper>
              <UpdateIcon src="/pencil.png/" />
              <DeleteIcon src="/delete.png/" />
            </OptionWrapper>
          </IconWrapper>
          <DateString>{el?.createdAt}</DateString>
        </Wrapper>
      ))}
    </>
  );
}
