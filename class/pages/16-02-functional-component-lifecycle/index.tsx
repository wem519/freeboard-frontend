import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";

export default function FunctionalComponentLifecyclePage() {
  const router = useRouter();

  const [count, setCount] = useState(0);
  const inputRef = useRef<HTMLInputElement>();
  //componentDidMount와 동일
  useEffect(() => {
    console.log("컴포넌트 마운트 완료");
    inputRef.current.focus();
    //componentWillUnmount와 동일
    return () => {
      console.log("잘가요");
    };
  }, []);
  //componentDidUpdate와 동일
  //완벽히 일치하지는 않음, 처음에 무조건 실행.
  //의존성 배열이 없다면 componentDidMount와 동일
  //의존성 배열을 붙이게 되면 의존성 배열에 의해서 재실행
  useEffect(() => {
    console.log("컴포넌트 수정완료");
  }, [count]);

  //setState와 useEffect
  //   useEffect(() => {
  //     setCount((prev) => prev + 1);
  //   }, []);
  //마운트 된 후 useEffect가 실행되는데 이후에 setCount가 실행되게 되면 state가 변경되고 변경된 state로 다시 그려지게 됨, 불필요한 작업이 추가되므로 필요한 경우가 아니면 사용 자제

  //setState와 useEffect의 dependency-array
  //   useEffect(() => {
  //     setCount((prev) => prev + 1);
  //   }, [count]);

  function onClickCount() {
    setCount((prev) => prev + 1);
  }

  function onClickMove() {
    router.push("/");
  }

  return (
    <>
      현재카운트: {count}
      <button onClick={onClickCount}>카운트증가</button>
      <button onClick={onClickMove}>페이지 이동</button>
      <input type="text" ref={inputRef} />
    </>
  );
}
