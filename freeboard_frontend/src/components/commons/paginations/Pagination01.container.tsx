import { useState } from "react";
import Pagination01UI from "./Pagination01.presenter";

export default function Pagination01(props) {
  const [clickedPage, setClickedPage] = useState(1);

  function onClickPage(event) {
    const clickedPage = Number(event.target.id);
    setClickedPage(clickedPage);
    props.refetch({ page: clickedPage });
  }

  return (
    <Pagination01UI
      startPage={props.startPage}
      clickedPage={clickedPage}
      onClickPage={onClickPage}
    />
  );
}
