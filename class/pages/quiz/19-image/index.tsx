import { gql, useMutation } from "@apollo/client";
import { useState, useRef } from "react";

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

export default function ImageQuizPage() {
  const [imageUrl, setImageUrl] = useState("");
  const fileRef = useRef<HTMLInputElement>();
  const [uploadFile] = useMutation(UPLOAD_FILE);

  async function onChangeFile(event) {
    const file = event.target.files[0];
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

  return (
    <>
      <div>이미지 업로드</div>
      <div
        style={{ width: "50px", height: "50px", backgroundColor: "gray" }}
        onClick={onClickDiv}
      >
        이미지 선택
      </div>
      <input
        ref={fileRef}
        style={{ display: "none" }}
        type="file"
        onChange={onChangeFile}
      />
      <img
        src={`https://storage.googleapis.com/${imageUrl}`}
        style={{ width: "200px", height: "200px" }}
        onChange={onChangeFile}
      />
      {/* <input type="file" onChange={onChangeFile} /> */}
      <br />
      작성자: <input type="text" />
      <br />
      비밀번호: <input type="text" />
      <br />
      제목: <input type="text" />
      <br />
      내용: <input type="text" />
      <br />
      <button>등록하기</button>
    </>
  );
}
