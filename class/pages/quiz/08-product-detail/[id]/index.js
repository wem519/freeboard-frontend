import {useRouter} from 'next/router' 
import {useQuery, gql} from '@apollo/client'

const FETCH_PRODUCT =gql`
 query fetchProduct($productId:ID){
     fetchProduct(productId:$productId){
         seller
         name
         detail
         _id
         price
     }
 }
`

export default function ProductRoutingPage(){

    const router =useRouter()
    const {data} = useQuery(FETCH_PRODUCT, {
        variables: { productId: router.query.id }
    })
    function onClickMoveToEdit(){
        router.push(`/quiz/08-product-detail/${router.query.id}/edit`)
    }    

    return(
        <>
            <div>상품정보 상세페이지</div>
            <div>게시자 아이디:{router.query.id}</div>
            <div>판매자: {data?.fetchProduct.seller}</div>
            <div>상품: {data?.fetchProduct.name}</div>
            <div>내용: {data?.fetchProduct.detail}</div>
            <div>가격: {data?.fetchProduct.price}</div>
            <button onClick={onClickMoveToEdit}>수정하러 이동하기</button>
        </>
    )
}