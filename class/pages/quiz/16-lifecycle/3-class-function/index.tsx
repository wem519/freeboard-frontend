import { useRouter } from "next/router";
import { useState, useRef, useEffect } from "react";

export default function FunctionalComponentPage() {
  const router = useRouter();
  const [count, setCount] = useState(0);

  const inputRef = useRef<HTMLInputElement>();

  useEffect(() => {
    console.log("컴포넌트가 마운트됐습니다~");
    inputRef.current.focus();
    return () => {
      alert("컴포넌트가 제거됩니다~");
    };
  }, []);

  useEffect(() => {
    console.log("컴포넌트가 변경됐습니다~");
  }, [count]);

  function onClickCounter() {
    setCount((prev) => prev + 1);
  }

  function onClickMove() {
    router.push("/");
  }

  return (
    <>
      {console.log("마운트 시작")}
      <input type="password" ref={inputRef} />
      <div>카운트: {count}</div>
      <button onClick={onClickCounter}>카운트</button>
      <button onClick={onClickMove}>이동하기</button>
    </>
  );
}
// import Router from "next/router";
// import { Component, createRef } from "react";

// export default class MyComponent extends Component {
//   state = {
//     count: 0,
//   };

//   inputRef = createRef<HTMLInputElement>();

//   componentDidMount() {
//     console.log("컴포넌트가 마운트됐습니다~");
//     this.inputRef.current?.focus();
//   }

//   componentDidUpdate() {
//     console.log("컴포넌트가 변경됐습니다~");
//   }

//   componentWillUnmount() {
//     alert("컴포넌트가 제거됩니다~");
//   }

//   onClickButton = () => {
//     this.setState((prev: { count: number }) => ({ count: prev.count + 1 }));
//   };

//   onClickMove = () => {
//     Router.push("/");
//   };

//   render() {
//     console.log("마운트 시작");
//     return (
//       <>
//         <input type="password" ref={this.inputRef} />
//         <div>카운트: {this.state.count}</div>
//         <button onClick={this.onClickButton}>카운트(+1)</button>
//         <button onClick={this.onClickMove}>이동하기</button>
//       </>
//     );
//   }
// }
