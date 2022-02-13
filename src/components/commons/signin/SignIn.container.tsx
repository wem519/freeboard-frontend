import SignInUI from "./SignIn.presenter";
import { useContext } from "react";
import { gql, useMutation } from "@apollo/client";
import { GlobalContext } from "../../../../pages/_app";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { schema } from "../../../commons/libraries/validation";
import { yupResolver } from "@hookform/resolvers/yup";

const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
    }
  }
`;

export default function SignInPage() {
  const router = useRouter();
  const { setAccessToken } = useContext(GlobalContext);
  const { handleSubmit, register, formState } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });
  const [loginUser] = useMutation(LOGIN_USER);

  async function onClickSignin(data) {
    const result = await loginUser({
      variables: {
        email: data.email,
        password: data.password,
      },
    });
    // const accessToken = result.data?.loginUser.accessToken;
    // localStorage.setItem("accessToken", result.data?.loginUser.accessToken);

    setAccessToken(result.data?.loginUser.accessToken);
    localStorage.setItem("refreshToken", "true");
    router.push("/markets");
    // console.log(accessToken);

    // const resultUserInfo = await client.query({
    //   query: FETCH_USER_LOGGED_IN,
    //   context: {
    //     headers: {
    //       authorization: `Bearer ${accessToken}`,
    //     },
    //   },
    // });
    // const userInfo = resultUserInfo.data.fetchUserLoggedIn;
    // setAccessToken(accessToken);
    // setUserInfo(userInfo);
    // router.push("/markets");
    // console.log(userInfo);

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
        formState={formState}
      />
    </>
  );
}
