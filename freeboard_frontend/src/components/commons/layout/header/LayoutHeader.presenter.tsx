import { OmitProps } from "antd/lib/transfer/ListBody";
import {
  Wrapper,
  InnerWrapper,
  InnerLogo,
  InnerButton,
} from "./LayoutHeader.styles";

export default function LayoutHeaderUI(props) {
  return (
    <>
      <Wrapper>
        <InnerWrapper>
          <InnerLogo onClick={props.onClickLogo}>LIVE</InnerLogo>
          <InnerButton onClick={props.onClickMoveToLogin}>로그인</InnerButton>
          <InnerButton onClick={props.onClickSignup}>회원가입</InnerButton>
        </InnerWrapper>
      </Wrapper>
    </>
  );
}
