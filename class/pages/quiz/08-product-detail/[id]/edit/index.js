import { useQuery,gql } from '@apollo/client'
import BoardWrite from '../../../../../src/components/units/quiz/product/ProductSeller.container'
import { useRouter } from 'next/router'

const FETCH_PRODUCT = gql`
    query fetchProduct($productId:ID){
        fetchProduct(productId: $productId){
            _id
            seller
            name
            detail
            price
        }
    }

`

export default function BoardEditPage(){
    
    const router = useRouter()

    const {data} =useQuery(FETCH_PRODUCT,{
        variables: {productId: router.query.id}
    })
    
    
    return <BoardWrite isEdit={true} 
    data={data} />
}