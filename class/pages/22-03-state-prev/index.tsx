import { useState } from "react";

export default function StatePrevPage() {
  const [count, setCount] = useState(0);

  function onClickButton() {
    setCount((adfaf) => {
      return adfaf + 1;
    });
  }
  return (
    <>
      <div>{count}</div>
      <button onClick={onClickButton}>+1</button>
    </>
  );
}
