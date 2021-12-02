import Upload01UI from "./Uploads01.presenter";
import { useRef, useState } from "react";

export default function Upload01(props: any) {
  const fileRef = useRef<HTMLInputElement>(null);
  const [fileUrl, setFileUrl] = useState("");

  function onClickUpload() {
    fileRef.current?.click();
  }

  function onChangeFiles(event) {
    const file = event.target.files?.[0];
    if (!file) return;

    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (data) => {
      setFileUrl(data.target?.result as string);
      props.onChangeFiles(file, props.index);
    };
  }
  return (
    <Upload01UI
      fileRef={fileRef}
      fileUrl={fileUrl}
      defaultFileUrl={props.defaultFileUrl}
      onClickUpload={onClickUpload}
      onChangeFiles={onChangeFiles}
    />
  );
}
