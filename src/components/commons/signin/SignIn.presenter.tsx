import { Wrapper } from "./SignIn.styles";
import Error01 from "../errors/01/error01";

export default function SignInUI(props: any) {
  return (
    <>
      <Wrapper>
        <form onSubmit={props.handleSubmit(props.onClickSignin)}>
          아이디:
          <input name="이메일" type="text" {...props.register("email")} />
          <Error01 value={props.formState.errors.email?.message} />
          <br />
          비밀번호:
          <input
            name="비밀번호"
            type="password"
            {...props.register("password")}
          />
          <Error01 value={props.formState.errors.password?.message} />
          <br />
          <button type="submit">로그인</button>
        </form>
      </Wrapper>
    </>
  );
}

// Apollo-Client를 사용해서 로그인화면을 구현하려 했는데 오류가 발생 - 로그인 결과 화면으로 이동이 되지 않고, return 윗 줄의 setUserInfo를 인식하지 못함.
// 수업 때와 다르게 react-hook-form을 사용하지 않았기 때문인가? - app.js입력 오류
//
