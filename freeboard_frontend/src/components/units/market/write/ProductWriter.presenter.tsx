import Input01 from "../../../commons/input/01/input01";
import Context from "../../../commons/context";
import { Wrapper } from "./ProductWriter.styles";

export default function ProductWriteUI(props) {
  return (
    <form onSubmit={props.handleSubmit(props.onClickSubmit)}>
      <Wrapper>
        <div>{props.isEdit ? "상품 수정하기" : "상품 등록하기"}</div>
        <Input01 type="text" name="상품명" register={props.register("name")} />
        <Input01
          type="text"
          name="한줄요약"
          register={props.register("remarks")}
        />
        <Context onChange={props.onchangeMyEditor} name="상품설명" />
        <Input01
          type="text"
          name="판매가격"
          register={props.register("price")}
        />
        <Input01 type="text" name="태그입력" register={props.register("tag")} />
        <button type="submit">등록하기</button>
      </Wrapper>
    </form>
  );
}
