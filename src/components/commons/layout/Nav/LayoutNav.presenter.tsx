import { Wrapper, MenuItem } from "./LayoutNav.styles";

export default function LayoutNavUI(props: any) {
  return (
    <>
      <Wrapper>
        <MenuItem id="/boards" onClick={props.onClickMenu}>
          쓸 얘기를 부탁해
        </MenuItem>
        <MenuItem id="/markets" onClick={props.onClickMenu}>
          쓸 애기를 부탁해
        </MenuItem>
        <MenuItem id="/mypages" onClick={props.onClickMenu}>
          마이 페이지
        </MenuItem>
      </Wrapper>
    </>
  );
}
