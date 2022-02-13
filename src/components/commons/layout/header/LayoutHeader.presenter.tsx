import {
  Wrapper,
  InnerWrapper,
  InnerLogo,
  InnerButton,
} from "./LayoutHeader.styles";

export default function LayoutHeaderUI(props: any) {
  return (
    <>
      <Wrapper>
        <InnerWrapper>
          <InnerLogo onClick={props.onClickLogo}>LIVE</InnerLogo>
          {props.accessToken && props.data?.fetchUserLoggedIn.name}
          {props.accessToken ? (
            <InnerButton onClick={props.onClickLogout}>로그아웃</InnerButton>
          ) : (
            <InnerButton onClick={props.onClickMoveToLogin}>로그인</InnerButton>
          )}
          {!props.accessToken && (
            <InnerButton onClick={props.onClickSignup}>회원가입</InnerButton>
          )}
        </InnerWrapper>
      </Wrapper>
    </>
  );
}
