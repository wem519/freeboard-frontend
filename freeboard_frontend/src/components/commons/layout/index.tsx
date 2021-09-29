import styled from "@emotion/styled";
import LayoutHeader from "./header/LayoutHeader.container";

const Body = styled.div`
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function Layout(props) {
  return (
    <>
      <LayoutHeader />
      <Body>{props.children}</Body>
    </>
  );
}
