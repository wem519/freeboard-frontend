import { Rate } from "antd";
import { useState } from "react";

const desc = ["terrible", "bad", "normal", "good", "wonderful"]; //hard-coding되어 안 변하는 스크립트는 바깥으로 보내준다. 무의미한 재출력을 방지하기 위해, use관련은 제외

export default function LibraryStarPage() {
  const [value, setValue] = useState(3);

  const handleChange = (value) => {
    setValue(value);
  };
  // state = {
  //     value: 3,
  //   };

  //   handleChange = value => {
  //     this.setState({ value });
  //   };

  //   render() {
  // const { value } = this.state;
  return (
    <span>
      <Rate onChange={handleChange} value={value} />
      {/* <Rate tooltips={desc} onChange={handleChange} value={value} /> */}
      {/* {value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ""} */}
    </span>
  );
  //   }
}
