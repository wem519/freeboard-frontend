// import "../styles/globals.css";
import "antd/dist/antd.css";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  ApolloLink,
} from "@apollo/client";
import Layout from "../src/components/commons/layout";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";
import { initializeApp } from "firebase/app";
import { createUploadLink } from "apollo-upload-client";
import { createContext, useEffect, useState } from "react";

export const firebaseApp = initializeApp({
  apiKey: "AIzaSyC_p2L5Smhcp01N-L9mGMgIBeClAMQm5Qk",
  authDomain: "codecamp-03-2ac38.firebaseapp.com",
  projectId: "codecamp-03-2ac38",
  storageBucket: "codecamp-03-2ac38.appspot.com",
  messagingSenderId: "433521846425",
  appId: "1:433521846425:web:e92d9849301dfb7c143008",
  measurementId: "G-JT6DG2XLX1",
});

export const GlobalContext = createContext(null);

function MyApp({ Component, pageProps }) {
  const [accessToken, setAccessToken] = useState("");
  const [userInfo, setUserInfo] = useState({});
  const value = {
    accessToken: accessToken,
    setAccessToken: setAccessToken,
    userInfo: userInfo,
    setUserInfo: setUserInfo,
  };
  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken") || "";
    setAccessToken(accessToken);
  }, []);

  console.log("token", accessToken);
  const uploadLink = createUploadLink({
    uri: "http://backend03.codebootcamp.co.kr/graphql",
    headers: { authorization: `Bearer ${accessToken}` },
  });
  // `Bearer- token을 구분짓기 위한 값 `
  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink]),
    cache: new InMemoryCache(),
  });

  return (
    <>
      <GlobalContext.Provider value={value}>
        <Global styles={globalStyles} />
        <ApolloProvider client={client}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ApolloProvider>
      </GlobalContext.Provider>
    </>
  );
}

export default MyApp;
