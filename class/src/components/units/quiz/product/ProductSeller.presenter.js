import { Button } from "./ProductSeller.styles";

export default function ProductSellerUI(props){

    return(
        <>
        <h1>{props.isEdit ? "수정페이지" : "등록페이지"}</h1>
            판매자: <input type="text" onChange={props.onChangeMySeller} defaultValue={props.data?.fetchProduct.myseller}></input>
            상품명: <input type="text" onChange={props.onChangeProduct} defaultValue={props.data?.fetchProduct.name}></input>
            상품내용: <input type="text" onChange={props.onChangeDetail}
            defaultValue={props.data?.fetchProduct.detail}></input>
            상품가격: <input type="text" onChange={props.onChangePrice}
            defaultValue={props.data?.fetchProduct.price}></input>
            {!props.isEdit && <Button onClick={props.onClickSummit} qqq={props.qqq}>상품등록하기</Button>}
            {props.isEdit &&<Button onClick={props.onClickEdit} qqq={props.qqq}>상품수정하기</Button>}
        </>

     )   
}

//product 시작페이지->product.container(create, update)

//[id] 상품 상세페이지

//edit안 상품 수정페이지

// Presenter.presenter 랜덤페이지