import {useMutation, gql} from '@apollo/client'
import {} from '@emotion/react'
import router from 'next/router'
import { useState } from 'react'
import { IMutation, IMutationCreateBoardArgs } from '../../src/commons/types/generated/types'

const CREATE_BOARD = gql`
mutation createBoard($writer: String, $title: String, $contents: String) {
    createBoard(writer: $writer, title: $title, contents: $contents){
      number
      message
    }
  }

`


export default function GraphqlMutationBoardPage(){

    const [ createBoard ] = useMutation<Pick< IMutation,'createBoard'>, IMutationCreateBoardArgs>(CREATE_BOARD)/*타입 스크립트에 해당 인자를 요청 */
    const[myWriter, setMyWriter] = useState< string>("") // 문자랑 숫자 모두  넣고 싶을 때
    const[myTitle, setMyTitle] = useState("")
    const[myContents, setMyContents] = useState("")

    const bbb: String = "asdf" // 상수에 타입 지정하기
    
    function onChangeMyWriter(event){
      setMyWriter(event.target.value)

    }

    function onChangeMyTitle(event){
      setMyTitle(event.target.value)

    }

    function onChangeMyContents(event){
      setMyContents(event.target.value)

    }

    async function aaa() {
        try {
          
          const result = await createBoard({
          variables: {writer: myWriter, title: myTitle, contents: myContents}
        })
        console.log(result)
        console.log(result.data.createBoard.number)
        //router.push('/05-06-dynamic-board-read.' +result.data.createBoard.number)//옛날 방식
        router.push(`/05-06-dynamic-board-read/${result.data.createBoard.number}`)//최신방식(템플릿 리터럴)

        } catch(error){

          console.log(error)
        }
      
      
        
    }
    
    return(
     <>  
        작성자 : <input type="text" onChange={onChangeMyWriter}></input>
        제목 : <input type="text" onChange={onChangeMyTitle}></input>
        내용 :<input type="text"  onChange={onChangeMyContents}></input>
        <button onClick={aaa}>GRAPHQL-API 요청하기</button>
    </>
    )

}
//코드 린터/ 포멧터 문법적인 규칙 규분에 통일성을 부여해주는 도구