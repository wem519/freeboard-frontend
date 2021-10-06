export default function HofPage() {
  function onClickFunction(event) {
    alert(`${event.target.id}번째 입니다`);
  }

  const onClickFunction2 = (index) => () => {
    alert(`${index}번째 입니다`);
  };
  // 24-01 10번째 hoc참고
  return (
    <>
      <div>HOF 연습 페이지입니다</div>
      {["철수", "영희", "훈이"].map((el, index) => (
        // <div key={el} id={String(index)} onClick={onClickFunction}>
        //   {el}입니다 ....첫번째
        <div
          key={el}
          onClick={onClickFunction2(index)}
          onClick={onClickFunction}
        >
          {el}입니다
        </div>
      ))}
    </>
  );
}
