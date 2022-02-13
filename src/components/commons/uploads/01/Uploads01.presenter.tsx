import { UploadImg, UploadButton, UploadHidden } from "./Uploads01.styles";
export default function Upload01UI(props: any) {
  console.log("사진", props.fileUrl);
  return (
    <>
      {props.fileUrl || props.defaultFileUrl ? (
        <UploadImg
          onClick={props.onClickUpload}
          src={
            props.fileUrl ||
            `https://storage.googleapis.com/${props.defaultFileUrl}`
          }
        />
      ) : (
        <UploadButton onClick={props.onClickUpload}>
          <>+</>
          <>Upload</>
        </UploadButton>
      )}
      <UploadHidden
        type="file"
        ref={props.fileRef}
        onChange={props.onChangeFiles}
      />
    </>
  );
}
