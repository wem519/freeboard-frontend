import { Wrapper, MenuItem } from "./LayoutNav.styles";

export default function LayoutNavUI(props: any) {
  return (
    <>
      <Wrapper>
        <MenuItem id="/boards" onClick={props.onClickMenu}>
          라이브 게시판
        </MenuItem>
        <MenuItem id="/markets" onClick={props.onClickMenu}>
          라이브 상품
        </MenuItem>
        <MenuItem id="/mypages" onClick={props.onClickMenu}>
          마이 페이지
        </MenuItem>
      </Wrapper>
    </>
  );
}
