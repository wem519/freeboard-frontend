import { DatePicker } from "antd";
import { useState } from "react";

export default function DatePage() {
  const [date, setDate] = useState("");

  function onChange(date, dateString) {
    console.log(date, dateString);
    setDate(dateString);
  }

  return (
    <>
      <DatePicker onChange={onChange} />
      <div>{date}</div>
    </>
  );
}
