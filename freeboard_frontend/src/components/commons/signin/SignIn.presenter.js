import { useState, useContext } from "react";
import { gql, useMutation, useApolloClient } from "@apollo/client";
import { Wrapper } from "./SignIn.styles";
// import { useRouter } from "next/router";
import { GlobalContext } from "../../../../pages/_app";

const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
    }
  }
`;

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
    }
  }
`;

export default function SignInUI() {
  // const router = useRouter();

  const { setAccessToken, setUserInfo, userInfo } = useContext(GlobalContext);
  const [loginUser] = useMutation(LOGIN_USER);

  const client = useApolloClient();

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
    const accessToken = result.data?.loginUser.accessToken;
    // console.log(accessToken);

    const resultUserInfo = await client.query({
      query: FETCH_USER_LOGGED_IN,
      context: {
        headers: {
          authorization: `Bearer ${accessToken}`,
        },
      },
    });
    const userInfo = resultUserInfo.data.fetchUserLoggedIn;
    setAccessToken(accessToken);
    setUserInfo(userInfo);
    // console.log(userInfo);

    // localStorage.setItem("accessToken", result.data?.loginUser.accessToken);
    // setAccessToken(result.data?.loginUser.accessToken);
    // console.log(result.data?.loginUser.accessToken);
    // router.push("/boards");
  }

  return (
    <>
      {userInfo.email ? (
        `${userInfo.name}님 환영합니다`
      ) : (
        <Wrapper>
          아이디: <input type="text" onChange={onChangeEmail} />
          <div>{emailError}</div>
          비밀번호: <input type="password" onChange={onChangePwd} />
          <div>{pwdError}</div>
          <button onClick={onClickSignin}>로그인</button>
        </Wrapper>
      )}
    </>
  );
}

// Apollo-Client를 사용해서 로그인화면을 구현하려 했는데 오류가 발생 - 로그인 결과 화면으로 이동이 되지 않고, return 윗 줄의 setUserInfo를 인식하지 못함.
// 수업 때와 다르게 react-hook-form을 사용하지 않았기 때문인가?
//
