import styled from "@emotion/styled";
import { useRouter } from "next/router";
import LayoutFooter from "./footer/LayoutFooter.container";
import LayoutHeader from "./header/LayoutHeader.container";
import LayoutBanner from "./banner/LayoutBanner.container";

const Wrapper = styled.div``;

// const Header = styled.div`
//   background-color: red;
//   height: 200px;
// `;

const Banner = styled.div`
  height: 400px;
  background-color: pink;
`;

const Nav = styled.div`
  height: 100px;
  background-color: orange;
  font-family: "myfont";
`;

const Body = styled.div``;

// const Footer = styled.div`
//   background-color: blue;
//   height: 300px;
// `;

const SidebarWrapper = styled.div`
  display: flex;
`;

const Sidebar = styled.div`
  background-color: skyblue;
  width: 400px;
`;

const HIDDEN = ["/13-01-layout-hidden"];

export default function Layout(props) {
  const router = useRouter();
  // console.log(router);
  const isHiddenFooter = HIDDEN.includes(router.pathname);

  return (
    <Wrapper>
      {/* <Header>여기는 헤더 영역입니다</Header> */}
      <LayoutHeader />
      {/* <Banner>배너영역</Banner> */}
      <LayoutBanner />
      <Nav>내비게이션영역</Nav>
      <SidebarWrapper>
        <Sidebar>사이드바영역</Sidebar>
        <Body>{props.children}</Body>
      </SidebarWrapper>
      {!isHiddenFooter && <LayoutFooter />}
      {/* <Footer>여기는 푸터 영역입니다</Footer> */}
    </Wrapper>
  );
}
