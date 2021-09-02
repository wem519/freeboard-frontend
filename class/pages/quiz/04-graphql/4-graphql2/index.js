import {useMutation, gql} from '@apollo/client'
import { useState } from 'react'

const CREATE_BOARD = gql`
mutation createBoard($writer: String, $title: String, $contents: String) {
  createBoard(writer: $writer, title: $title, contents: $contents){
    number
    message
  }
}

`


export default function GraphqlMutationBoard1Page(){

    const [ createBoard ] = useMutation(CREATE_BOARD)

    const [quizWriter, setQuizWriter] =useState("")
    const [quizTitle, setQuizTitle] =useState("")
    const [quizContents, setQuizContents] =useState("") 

    function onChangeQuizWriter(event){
      setQuizWriter(event.target.value)
    }
    function onChangeQuizTitle(event){
      setQuizTitle(event.target.value)
    }
    function onChangeQuizContents(event){
      setQuizContents(event.target.value)
    }

    async function summit() {
        const result = await createBoard({variables: {writer: quizWriter, title: quizTitle, contents: quizContents}})
        console.log(result)
        console.log(result.data.createBoard.number)
    }
    
    return(
      <>
        작성자: <input type="text" onChange={onChangeQuizWriter}/>
        제목: <input type="text" onChange={onChangeQuizTitle }/>
        내용: <input type="text" onChange={onChangeQuizContents}/>
        <button onClick={summit}>GRAPHQL-API 요청하기</button>
    </>
    )

}