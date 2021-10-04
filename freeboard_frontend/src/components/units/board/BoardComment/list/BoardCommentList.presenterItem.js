import {
  Wrapper,
  IconWrapper,
  Icon,
  MainWrapper,
  WriterWrapper,
  Writer,
  Star,
  Contents,
  OptionWrapper,
  UpdateIcon,
  DeleteIcon,
  DateString,
} from "./BoardCommentList.styles";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import BoardCommentWrite from "../write/BoardCommentWrite.container";
import { FETCH_BOARD_COMMENTS } from "./BoardCommentList.queries";

export default function BoardCommentListUIItem(props) {
  const [isEdit, setIsEdit] = useState(false);
  const [myPassword, setMyPassword] = useState("");

  function onClickUpdate() {
    setIsEdit(true);
  }

  return (
    <>
      {!isEdit && (
        <Wrapper>
          <IconWrapper>
            <Icon src="/user.png/" />
            <MainWrapper>
              <WriterWrapper>
                <Writer>{props.el?.writer}</Writer>
                <Star value={props.el?.rating} disabled />
              </WriterWrapper>
              <Contents>{props.el?.contents}</Contents>
            </MainWrapper>
            <OptionWrapper>
              <UpdateIcon src="/pencil.png/" onClick={onClickUpdate} />
              <DeleteIcon src="/delete.png/" />
            </OptionWrapper>
          </IconWrapper>
          <DateString>{props.el?.createdAt}</DateString>
        </Wrapper>
      )}
      {isEdit && (
        <BoardCommentWrite
          isEdit={isEdit}
          setIsEdit={setIsEdit}
          el={props.el}
        />
      )}
    </>
  );
}
