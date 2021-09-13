import {gql, useMutation, useQuery} from '@apollo/client'
import styled from '@emotion/styled'

const Row =styled.div`
    display:flex;
    flex-direction:row;
    border-bottom: 1px solid black;
`

const Column = styled.div`
    width: 20%;
`

const FETCH_PRODUCTS = gql`
    query{
        fetchProducts{
            _id
            seller
            name
            detail
            price
            createdAt
        }
    }
`

const DELETE_PRODUCT= gql`
    mutation deleteProduct($productId: ID){
        deleteProduct
        (productId:$productId){
            number
        }
    }

`

export default function MapProductPage(){

    const [deleteProduct] =useMutation(DELETE_PRODUCT)
    const {data} = useQuery(FETCH_PRODUCTS)
    

   async function onClickDelete(event){
        // Number(event.target.id)

       await deleteProduct({
            variables:{productId: 
            event.target.id},
            refetchQueries:[{query : FETCH_PRODUCTS}]
        })

        
    }
return(
    <div>
        {data?.fetchProducts.map((el,index) => (
        <Row key={el._id}> {/*fetchProduct에서 데이터를 받아올 때 productId값을 가지고 받아오기 때문에 하위의 엘리먼트가 아니라 상위의 엘리멘트에 지정해줘야 한다. */} 
            <Column>
                <input type="checkbox"/>
            </Column>
            <Column>{el.seller}</Column>
            <Column>{index}</Column>
            <Column>{el.name}</Column>
            <Column>{el.detail}</Column>
            <Column>{el.price}</Column>
            <Column>{el.createdAt}</Column>
            <Column>
                <button id={el._id} onClick={onClickDelete}>삭제하기</button>
            </Column>
        </Row> 
        ))}
    </div>

)

}

//아토믹 디자인
처음 단계인 atom을 잘 만들고 여러 개의 컴포넌트들을 모아 또 다른 컴포넌트를 만들 수 있도록 조립하며 개발하는 방식.
컴포넌트 간 의존성과 복잡도가 생각보다 까다롭기 때문에 원자 단위의 컴포넌트로 컴포넌트를 수정해주면 소수의 요청은 괜찮겠지만 수많은 요청이 발생할 경우 여러개로 분화된 원자 컴포넌트를 명확히 구분하기 어려워진다. 또한 상하로 발생하는 컴포넌트 간 의존성으로 하위 컴포넌트에서 예상치 못한 에러가 발생하게 되면 모든 상위 컴포넌트가 엉망이 될 수 있다. 분자 수준의 컴포넌트에서 관리하는 게 방어적 프로그래밍._id

게시판의 시작페이지를 원자로 두고 등록, 수정페이지, 상세페이지로 폴더를 구분한 상태

댓글페이지는 상세페이지의 하부

하나의 컴포넌트로 만든다면 버튼을 포함해서 ui를 만들고 
상세페이지의 리턴값에 댓글 컴포넌트를 연결해보자

사진이나 
