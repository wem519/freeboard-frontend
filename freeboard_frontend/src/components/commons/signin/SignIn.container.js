import SignInUI from "./SignIn.presenter";
import { useContext } from "react";
import { gql, useMutation, useApolloClient } from "@apollo/client";
import { Wrapper } from "./SignIn.styles";
import { GlobalContext } from "../../../../pages/_app";
import { useForm } from "react-hook-form";
import router from "next/router";

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

export default function SignInPage() {
  const { setAccessToken, setUserInfo, userInfo } = useContext(GlobalContext);
  const { handleSubmit, register } = useForm();
  const [loginUser] = useMutation(LOGIN_USER);

  const client = useApolloClient();

  async function onClickSignin(data) {
    const result = await loginUser({
      variables: {
        email: data.myEmail,
        password: data.myPwd,
      },
    });
    const accessToken = result.data?.loginUser.accessToken;
    localStorage.setItem("accessToken", result.data?.loginUser.accessToken);
    setAccessToken(result.data?.loginUser.accessToken);
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
    router.push("/markets");
    console.log(userInfo);

    // localStorage.setItem("accessToken", result.data?.loginUser.accessToken);
    // setAccessToken(result.data?.loginUser.accessToken);
    // console.log(result.data?.loginUser.accessToken);
    // router.push("/boards");
  }

  return (
    <>
      <SignInUI
        handleSubmit={handleSubmit}
        register={register}
        onClickSignin={onClickSignin}
      />
    </>
  );
}
