import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../../../../pages/_app";

export const withAuth = (Component) => (props: any) => {
  const router = useRouter();
  const { accessToken } = useContext(GlobalContext);

  useEffect(() => {
    if (!localStorage.getItem("refreshToken")) {
      alert("로그인이 필요합니다");
      router.push("/sign");
    }
  }, [accessToken]);
  return <Component {...props} />;
};
