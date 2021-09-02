import { useMutation, gql } from '@apollo/client'

const Mutation = gql`
mutation{
    createBoard(
    writer:"우의명", 
    title:"코딩", 
    contents:"과제"){
      message
      number
    }
  }

`
// Mutation 안에 playground에서와 같이 입력 혹은 복사

export default function GraphqlApiPage(){

    const [createBoard] =useMutation(Mutation)

    async function summit(){

        const result = await createBoard()
        console.log(result)
        
    }
    
    return(

        <button onClick={summit}>GRAPHQL-API요청하기</button>
    )
}
