import { gql, useMutation } from "@apollo/client";
import { useState, useRef } from "react";
import { fileValidation } from "../../../src/commons/libraries/validation";
import { LikeTwoTone } from "@ant-design/icons";

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;
const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
    }
  }
`;

export default function ImageQuizPage() {
  const [imageUrl, setImageUrl] = useState("");
  const fileRef = useRef<HTMLInputElement>();
  const [uploadFile] = useMutation(UPLOAD_FILE);
  const [createBoard] = useMutation(CREATE_BOARD);

  async function onChangeFile(event) {
    const file = event.target.files[0];
    if (!fileValidation(file)) return;
    console.log(file);
    const result = await uploadFile({
      variables: {
        file: file,
      },
    });
    console.log(result.data.uploadFile.url);
    setImageUrl(result.data.uploadFile.url);
  }
  function onClickDiv() {
    fileRef.current?.click();
  }

  const [myWriter, setMyWriter] = useState("");
  const [myPwd, setMyPwd] = useState("");
  const [myTitle, setMyTitle] = useState("");
  const [myContents, setMyContents] = useState("");

  function onChangeMyWriter(event) {
    setMyWriter(event.target.value);
  }
  function onChangeMyPwd(event) {
    setMyPwd(event.target.value);
  }
  function onChangeMyTitle(event) {
    setMyTitle(event.target.value);
  }
  function onChangeMyContents(event) {
    setMyContents(event.target.value);
  }
  async function onClickSubmit() {
    const result = await createBoard({
      variables: {
        createBoardInput: {
          writer: myWriter,
          password: myPwd,
          title: myTitle,
          contents: myContents,
          images: [imageUrl],
        },
      },
    });
    console.log(result);
  }

  return (
    <>
      <div>이미지 업로드</div>
      <div
        style={{ width: "50px", height: "50px", backgroundColor: "gray" }}
        onClick={onClickDiv}
      >
        이미지 선택
      </div>
      <LikeTwoTone onClick={onClickDiv} />
      <input
        ref={fileRef}
        style={{ display: "none" }}
        type="file"
        onChange={onChangeFile}
      />
      <img
        src={`https://storage.googleapis.com/${imageUrl}`}
        style={{ width: "300px", height: "300px" }}
        onChange={onChangeFile}
      />
      {/* <input type="file" onChange={onChangeFile} /> */}
      <br />
      작성자: <input type="text" onChange={onChangeMyWriter} />
      <br />
      비밀번호: <input type="text" onChange={onChangeMyPwd} />
      <br />
      제목: <input type="text" onChange={onChangeMyTitle} />
      <br />
      내용: <input type="text" onChange={onChangeMyContents} />
      <br />
      <button onClick={onClickSubmit}>등록하기</button>
    </>
  );
}
