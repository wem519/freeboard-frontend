import { useMutation,gql } from "@apollo/client"
import { useState } from "react"

const QuizCreateProduct = gql`
mutation createProduct
    ($seller:String ,$createProductInput:CreateProductInput!){
      createProduct(  
        seller:$seller,
        createProductInput:$createProductInput
        ){
      _id  
      message
      number
    }
  }
`


export default function QuizProductPage(){

const [createProduct] = useMutation(QuizCreateProduct)

const [quizSeller, setQuizSeller] = useState("")
const[quizProduct, setQuizProduct] = useState("")
const[quizDetail, setQuizDetail] = useState("")
const[quizPrice, setQuizPrice] = useState("")


function onChangeQuizSeller(event){
    setQuizSeller(event.target.value)
}
function onChangeQuizProduct(event){
    setQuizProduct(event.target.value)
}
function onChangeQuizDetail(event){
    setQuizDetail(event.target.value)
}
function onChangeQuizPrice(event){
    setQuizPrice(event.target.value)
}

async function onClickApply(){
    const result = await createProduct({
        variables:{
                seller: quizSeller,
                createProductInput:{
                name: quizProduct,
                detail: quizDetail,
                price: Number(quizPrice)
            }

        }
    })
    console.log(result.data.createProduct._id )
}
    
    
    
    
    
    
    return(
        <>
            판매자: <input type="text" onChange={onChangeQuizSeller}/>
            상품명: <input type="text" onChange={onChangeQuizProduct}/>
            상품상세: <input type="text" onChange={onChangeQuizDetail}/>
            상품가격: <input type="text" onChange={onChangeQuizPrice}/>
            <button onClick={onClickApply}>상품등록하기</button>
        </>


    )
}