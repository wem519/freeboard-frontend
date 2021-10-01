import { Page } from "./Pagination01.styles";

export default function Pagination01UI(props) {
  return (
    <>
      <div></div>
      {new Array(10).fill(1).map((_, index) => (
        <Page
          key={props.startPage + index}
          onClick={props.onClickPage}
          id={String(props.startPage + index)}
        >
          {props.startPage + index}
        </Page>
      ))}
    </>
  );
}
