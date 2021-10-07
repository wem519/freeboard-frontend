import styled from "@emotion/styled";
import { Iprops } from "./MyForm.type";

export const MyButton = styled.button`
  background-color: ${(props: Iprops) => (props.isValid ? "yellow" : "")};
`;
