import { useState, useContext } from "react";
import { gql, useMutation } from "@apollo/client";
import { Wrapper } from "./SignIn.styles";
import { useRouter } from "next/router";
import { GlobalContext } from "../../../../../pages/_app";

const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
    }
  }
`;

export default function SignInUI() {
  const router = useRouter();

  const { setAccessToken } = useContext(GlobalContext);
  const [loginUser] = useMutation(LOGIN_USER);

  const [myEmail, setMyEmail] = useState("");
  const [myPwd, setMyPwd] = useState("");

  const [emailError, setEmailError] = useState("");
  const [pwdError, setPwdError] = useState("");

  function onChangeEmail(event) {
    setMyEmail(event.target.value);
  }
  function onChangePwd(event) {
    setMyPwd(event.target.value);
  }

  async function onClickSignin() {
    if (myEmail === "") {
      setEmailError("이메일을 입력해주세요");
    }
    if (myPwd === "") {
      setPwdError("비밀번호를 입력해주세요");
    }
    const result = await loginUser({
      variables: {
        email: myEmail,
        password: myPwd,
      },
    });
    localStorage.setItem("accessToken", result.data?.loginUser.accessToken);
    setAccessToken(result.data?.loginUser.accessToken);
    console.log(result.data?.loginUser.accessToken);
    router.push("/boards");
  }
  return (
    <Wrapper>
      아이디: <input type="text" onChange={onChangeEmail} />
      <div>{emailError}</div>
      비밀번호: <input type="password" onChange={onChangePwd} />
      <div>{pwdError}</div>
      <button onClick={onClickSignin}>로그인</button>
    </Wrapper>
  );
}
