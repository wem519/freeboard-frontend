import { useState } from "react";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import ProductSellerUI from "./ProductSeller.presenter";
import { CREATE_PRODUCT, UPDATE_PRODUCT } from "./ProductSeller.queries";

export default function ProductSeller(props) {
  const router = useRouter();
  const [createProduct] = useMutation(CREATE_PRODUCT);
  const [updateProduct] = useMutation(UPDATE_PRODUCT);

  const [mySeller, setMySeller] = useState("");
  const [product, setProduct] = useState("");
  const [detail, setDetail] = useState("");
  const [price, setPrice] = useState("");
  const [qqq, setQqq] = useState(false);

  function onChangeMySeller(event) {
    setMySeller(event.target.value);
    if (
      event.target.value !== "" &&
      product !== "" &&
      detail !== "" &&
      price !== ""
    ) {
      setQqq(true);
    } else {
      setQqq(false);
    }
  }
  function onChangeProduct(event) {
    setProduct(event.target.value);
    if (
      mySeller !== "" &&
      event.target.value !== "" &&
      detail !== "" &&
      price !== ""
    ) {
      setQqq(true);
    } else {
      setQqq(false);
    }
  }
  function onChangeDetail(event) {
    setDetail(event.target.value);
    if (
      mySeller !== "" &&
      detail !== "" &&
      event.target.value !== "" &&
      price !== ""
    ) {
      setQqq(true);
    } else {
      setQqq(false);
    }
  }
  function onChangePrice(event) {
    setPrice(event.target.value);
    if (
      mySeller !== "" &&
      product !== "" &&
      detail !== "" &&
      event.target.value !== ""
    ) {
      setQqq(true);
    } else {
      setQqq(false);
    }
  }

  async function onClickSummit() {
    try {
      const result = await createProduct({
        variables: {
          seller: mySeller,
          createProductInput: {
            name: product,
            detail: detail,
            price: Number(price),
          },
        },
      });
      console.log(result.data.createProduct._id);
      router.push(`/quiz/08-product-detail/${result.data.createProduct._id}`); //  파일위치 ${data}
    } catch (error) {
      console.log(error);
    }
  }

  async function onClickEdit() {
    try {
      const myVariables = {
        productId: router.query.id,
      };
      // if(product) myVariables.name = product
      // if(detail) myVariables.detail = detail
      // if(price) myVariables.price = Number(price)

      if (product) myVariables.name = product;
      if (detail) myVariables.detail = detail;
      if (price) myVariables.price = Number(price);

      await updateProduct({
        variables: {
          productId: router.query.id,
          updateProductInput: {
            name: product,
            detail: detail,
            price: Number(price),
          },
        },
      });
      router.push(`/quiz/08-product-detail/${router.query.id}`);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <ProductSellerUI
      onChangeMySeller={onChangeMySeller}
      onChangeProduct={onChangeProduct}
      onChangeDetail={onChangeDetail}
      onChangePrice={onChangePrice}
      onClickSummit={onClickSummit}
      isEdit={props.isEdit}
      onClickEdit={onClickEdit}
      qqq={qqq}
      data={props.data}
    />
  );
}

//작성 후 404 에러 ---> 마지막 수정하기 버튼 클릭시 오류가 발생했기 때문에 수정하기 해당 구문에 오류가 발생한 것.
//router로 push하는 폴더를 왜인지는 모르겠지만 앞글자를 대문자로 작성해서 페이지 자체가 열리지 않게 됨.
//페이지 구분을 좀 더 확실하게 알아둬야겠다
//오류 메시지를 읽고 문제의 원인을 풀어낼 수 있어야 하는데 아직까지는 다른 분들의 도움이 없으면 해결할 능력이 없다.
//mento파일에 있는 완료된 구문을 실행시켜도 수정요청 후에는 동일한 에러가 발생, 출력에는 문제가 없지만 오류가 뜨는게 원래 정상 상태인건가?
