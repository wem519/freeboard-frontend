import styled from "@emotion/styled";

export const Wrapper = styled.div`
  height: 100px;
  background-color: gray;
  display: flex;
  flex-direction: row;
  justify-content: center;
  /* align-items: center; */
  font-family: 'SangSangRock'
  }
`;

export const InnerWrapper = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 40px;
`;

export const InnerLogo = styled.div`
  cursor: pointer;
  color: white;
`;

export const InnerButton = styled.div`
  margin: 10px;
  cursor: pointer;
  color: white;
`;
