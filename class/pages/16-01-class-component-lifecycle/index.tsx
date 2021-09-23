import { Component, createRef } from "react";
//react에서 제공하는 Component를 가지고 와서 상속
import Router from "next/router";
interface IState {
  count: number;
}

export default class ClassComponentLifecyclePage extends Component {
  inputRef = createRef<HTMLInputElement>();

  state = {
    count: 0,
  };

  componentDidMount = () => {
    console.log("컴포넌트 마운트 완료");
    this.inputRef.current.focus();
  };
  //컼포넌트가 마운트 된 후에 input 태그에 cursor가 깜빡거리게 됨
  //getElementById를 사용하게 되면 해당 태그에 id값을 입력해야 하고 페이지가 커질수록 중복된 id값을 피하기 번거로운 점이 있다. => ref방식이 훨씬 효율적.

  componentDidUpdate = () => {
    console.log("컴포넌트 수정 완료");
  };

  componentWillUnmount = () => {
    console.log("잘가요");
  };
  //위 세가지 component함수를 한꺼번에 사용할 수 있는 함수가 useEffect

  onClickCount = () => {
    this.setState((prev: IState) => ({
      count: prev.count + 1,
    }));
  };

  onClickMove = () => {
    Router.push("/");
  };

  render() {
    return (
      <>
        현재카운트:{this.state.count}
        <button onClick={this.onClickCount}>카운트 증가</button>
        <button onClick={this.onClickMove}>페이지 이동하기</button>
        <input type="text" ref={this.inputRef} />
      </>
    );
  }
}
