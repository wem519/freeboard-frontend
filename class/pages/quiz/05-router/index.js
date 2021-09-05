import {useState} from 'react'
import { useMutation, gql } from '@apollo/client'
import router from 'next/router'

const CREATE_PRODUCT = gql`
    mutation productPractice(
        $seller: String,
        $createProductInput:CreateProductInput!){
            createProduct(
                seller:$seller,
                createProductInput:
                $createProductInput
            ){
                _id
                number
                message
            }
        }

    
`

export default function ProductRouterPage(){

     
    const [ProductPractice] = useMutation(CREATE_PRODUCT)

    const[mySeller, setMySeller] =useState("")
    const[product, setProduct] =useState("")
    const[detail, setDetail] =useState("")
    const[price, setPrice] = useState("")

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

    async function onClickSummit(){

        try{
            const result = await ProductPractice({
            variables:{
                seller: mySeller,
                createProductInput:{
                    name: product,
                    detail: detail,
                    price: Number(price)
                }
            }
        })
        console.log(result.data.createProduct._id)
        router.push(`/quiz/05-router-read/${result.data.createProduct._id}`)//  파일위치 ${data}
    } catch(error){
        console.log(error)
    } 
    
    }
    
    
    
    return(
        <>
            판매자: <input type="text" onChange={onChangeMySeller}></input>
            상품명: <input type="text" onChange={onChangeProduct}></input>
            상품내용: <input type="text" onChange={onChangeDetail}></input>
            상품가격: <input type="text" onChange={onChangePrice}></input>
            <button onClick={onClickSummit}>상품등록하기</button>
        </>

     )   
}