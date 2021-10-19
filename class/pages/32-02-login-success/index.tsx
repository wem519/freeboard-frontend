import { useQuery, gql } from "@apollo/client";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../_app";

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      name
      email
    }
  }
`;
export default function SuccessPage() {
  const { setUserInfo, userInfo } = useContext(GlobalContext);
  const { data } = useQuery(FETCH_USER_LOGGED_IN);

  useEffect(() => {
    if (userInfo.email) return;
    setUserInfo({
      email: data?.fetchUserLoggedIn.email,
      name: data?.fetchUserLoggedIn.name,
      // picture: data?.fetchUserLoggedIn.picture,
    });
  }, [data]);
  console.log(data?.fetchUserLoggedIn.email);
  console.log("email", data?.fetchUserLoggedIn.email);
  // console.log(userInfo);
  return (
    <>
      <div>로그인에 성공하셨습니다</div>
      {data?.fetchUserLoggedIn.name}님 환영합니다.
    </>
  );
}
