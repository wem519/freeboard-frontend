import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1200px;
  height: 100px;
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: #f1f1f1f1;
  /* align-items: center; */
  font-family: "SangSangRock";
`;

export const InnerWrapper = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  font-size: 30px;
`;

export const InnerLogo = styled.div`
  cursor: pointer;
  color: black;
`;

export const InnerButton = styled.div`
  margin: 10px;
  cursor: pointer;
  color: black;
`;
