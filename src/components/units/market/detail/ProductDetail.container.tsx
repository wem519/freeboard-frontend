import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import ProductDetailUI from "./ProductDetail.presenter";
import { FETCH_USEDITEM } from "./ProductDetail.queries";
export default function ProductDetail() {
  const router = useRouter();
  const { data } = useQuery(FETCH_USEDITEM, {
    variables: {
      useditemId: router.query.read,
    },
  });

  function onClickMoveToList() {
    router.push(`/markets`);
  }
  function onClickMoveToEdit() {
    router.push(`/markets/${router.query.read}/edit`);
  }
  function onClickDelete() {}
  function onClickBuy() {}

  return (
    <ProductDetailUI
      data={data}
      onClickMoveToList={onClickMoveToList}
      onClickMoveToEdit={onClickMoveToEdit}
      onClickDelete={onClickDelete}
      onClickBuy={onClickBuy}
    />
  );
}
