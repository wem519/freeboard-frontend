import { useMutation, gql } from "@apollo/client";
import {} from "@emotion/react";
import { useState } from "react";

const CREATE_BOARD = gql`
  mutation createBoard($writer: String, $title: String, $contents: String) {
    createBoard(writer: $writer, title: $title, contents: $contents) {
      number
      message
    }
  }
`;
// 04-04-grphql-mutaion-board3 과 비교하면서 학습하기
export default function GraphqlMutationBoard3Page() {
  const [createBoard] = useMutation(CREATE_BOARD);
  const [myInputs, setMyInputs] = useState({
    writer: "",
    title: "",
    contents: "",
  });

  function onChangeMyInputs(event) {
    setMyInputs({
      ...myInputs,
      [event.target.name]: event.target.value,
      //writer: myInputs.writer
      //title: myInputs.title
      //contents: myInputs.contents
      //writer: "철수"
    });
  }

  // function onChangeMyWriter(event) {
  //   setMyWriter(event.target.value);
  // }

  // function onChangeMyTitle(event) {
  //   setMyTitle(event.target.value);
  // }

  // function onChangeMyContents(event) {
  //   setMyContents(event.target.value);
  // }

  async function aaa() {
    const result = await createBoard({
      variables: { writer: myWriter, title: myTitle, contents: myContents },
    });
    console.log(result);
    console.log(result.data.createBoard.number);
  }

  return (
    <input>
      작성자 :{" "}
      <input type="text" name="writer" onChange={onChangeMyInputs}></input>
      제목 :{" "}
      <input type="text" name="title" onChange={onChangeMyInputs}></input>
      내용 :
      <input type="text" name="contents" onChange={onChangeMyInputs}></input>
      <button onClick={aaa}>GRAPHQL-API 요청하기</button>
    </>
  );
}
