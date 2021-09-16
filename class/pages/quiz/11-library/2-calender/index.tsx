import { DatePicker } from "antd";
import { useState } from "react";

export default function DatePage() {
  function onChange(date, dateString) {
    console.log(date, dateString);
  }

  return (
    <>
      <DatePicker onChange={onChange} />
      <div>{}</div>
    </>
  );
}
