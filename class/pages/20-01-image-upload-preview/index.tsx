import { useRef, useState } from "react";
import { fileValidation } from "../../src/commons/libraries/validation";
import { gql, useMutation } from "@apollo/client";

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
export default function ImageUploadPreviewPage() {
  const [imageUrl, setImageUrl] = useState("");
  const [uploadFile] = useMutation(UPLOAD_FILE);
  const [createBoard] = useMutation(CREATE_BOARD);
  const [myFile, setMyFile] = useState();
  const fileRef = useRef<HTMLInputElement>();
  // console.log(myFile);

  function onClickGray() {
    fileRef.current.click();
  }
  function onChangeFile(event) {
    const file = event.target.files[0];
    // console.log(file);
    if (!fileValidation(file)) return;

    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (data) => {
      setImageUrl(data.target.result);
      setMyFile(file); //
    };
  }
  console.log(imageUrl);

  async function onClickSubmit() {
    const start = performance.now();
    Promise.all([
      uploadFile({ variables: { file: myFile } }),
      // uploadFile({ variables: { file: myFile } }),
      // uploadFile({ variables: { file: myFile } }),
      // uploadFile({ variables: { file: myFile } }),
      // uploadFile({ variables: { file: myFile } }),
    ]);
    const end = performance.now();
    console.log(end - start);

    // console.log(myFile);
    // const start = performance.now();
    // const result1 = await uploadFile({
    //   variables: {
    //     file: myFile,
    //   },
    // });
    // const result2 = await uploadFile({
    //   variables: {
    //     file: myFile,
    //   },
    // });
    // const result3 = await uploadFile({
    //   variables: {
    //     file: myFile,
    //   },
    // });
    // const result4 = await uploadFile({
    //   variables: {
    //     file: myFile,
    //   },
    // });
    // const result5 = await uploadFile({
    //   variables: {
    //     file: myFile,
    //   },
    // });
    // const end = performance.now();
    // console.log(end - start);

    //게시물 등록
    //createBoard({variables: {
    //  images: [url]
    // }})
    // const url = result.data.uploadFile.url;
  }
  return (
    <>
      <div
        style={{ width: "50px", height: "50px", backgroundColor: "gray" }}
        onClick={onClickGray}
      >
        이미지 업로드
      </div>
      <img src={imageUrl} style={{ width: "200px", height: "200px" }} />
      <input type="file" ref={fileRef} onChange={onChangeFile} />
      <button onClick={onClickSubmit}>게시물 등록하기</button>
    </>
  );
}
