import { useMutation,gql } from "@apollo/client"
import { useState } from "react"



const CREATE_PRODUCT = gql`
    mutation createProduct(
        $seller:String $createProductInput:CreateProductInput!){
        createProduct(
            seller:$seller,
            createProductInput:$createProductInput
        ){
        _id
        number
        message
        }
      }
` 




export default function GraphqlMutationProductPage(){
    
    const [createProduct] = useMutation(CREATE_PRODUCT)
    const [mySeller, setMySeller] =useState("")
    const [product, setProduct] = useState("")
    const [detail, setDetail] =useState("")
    const [price, setPrice] = useState("")



function onChangeMySeller(event){ 
    setMySeller(event.target.value)
}
function onChangeProduct(event){
    setProduct(event.target.value)
}
function onChangeDetail(event){
    setDetail(event.target.value)

}

function onChangePrice(event){
    setPrice(event.target.value)

}
    
    async function onClickSubmit(){
        const result = await createProduct({
            variables: {
                seller: mySeller,
                createProductInput:{
                    name: product,
                    detail:detail,
                    price: Number(price)
                }

            }
        })
        console.log(result.data.createProduct._id)
    }
    
    
    return(
    <>    
        판매자: <input type="text" onChange={onChangeMySeller}/>
        상품명: <input type="text" onChange={onChangeProduct}/>
        상품상세: <input type="text" onChange={onChangeDetail}/>
        상품가격: <input type="text" onChange={onChangePrice}/>
        <button onClick={onClickSubmit}>상품등록하기</button>
    </>
    )
}