import { DatePicker, Space } from "antd";
import { useState } from "react";

export default function Library() {
  function onChange(date) {
    console.log(date);
  }

  return (
    <>
      <Space direction="vertical">
        <DatePicker onChange={onChange} format="MMMM" picker="month" />
      </Space>
    </>
  );
}
