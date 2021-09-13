import { Rate } from "antd";
import { useState } from "react";

export default function Library() {
  const [value, setValue] = useState(3);

  const handleChange = (value) => {
    setValue(value);
    // alert(value + "점");  ===>1-1 1.
  };
  const desc = ["terrible", "bad", "normal", "good", "wonderful"];

  return (
    <span>
      <Rate tooltips={desc} onChange={handleChange} value={value} />
      {/*  ===>  1-1 2. */}
      {/* <Rate tooltips={desc} onChange={this.handleChange} value={value} /> */}
    </span>
  );
}
