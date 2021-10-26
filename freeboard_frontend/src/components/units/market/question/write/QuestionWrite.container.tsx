import { CREATE_USEDITEM_QUESTION } from "./QuestionWrite.queries";
import QuestionUI from "./QuestionWrite.presenter";
import { useMutation } from "@apollo/client";
import { useState } from "react";
import router from "next/router";
export default function QuestionWritePage(props) {
  const [createUseditemQuestion] = useMutation(CREATE_USEDITEM_QUESTION);
  const [myContents, setMyContents] = useState("");

  function onChangeMyContents(event) {
    setMyContents(event.target.value);
  }

  async function onClickWrite() {
    await createUseditemQuestion({
      variables: {
        useditemId: router.query.read,
        createUseditemQuestionInput: {
          contents: myContents,
        },
      },
    });
  }
  return (
    <QuestionUI
      onChangeMyContents={onChangeMyContents}
      onClickWrite={onClickWrite}
      el={props.el}
      isEdit={props.isEdit}
    />
  );
}
