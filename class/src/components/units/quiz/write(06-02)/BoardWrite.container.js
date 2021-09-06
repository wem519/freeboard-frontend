 import BoardWriteUI from "../write(06-02)/BoardWrite.presenter"
 import {useState} from 'react'
 import { useMutation } from "@apollo/client"
 import { CREATE_BOARD } from "../write(06-02)/BoardWrite.queries"
 import router from 'next/router'
 
 export default function  BoardWrite(){
    
    const [ createBoard ] = useMutation(CREATE_BOARD)
    const[myWriter, setMyWriter] = useState("")
    const[myTitle, setMyTitle] = useState("")
    const[myContents, setMyContents] = useState("")
    
    const[qqq, setQqq] = useState(false)

    
    function onChangeMyWriter(event){
      setMyWriter(event.target.value)
      if(event.target.value !== "" && myTitle !== "" && myContents !== ""){
        setQqq(true);
      }else{
        setQqq(false);
      }
    }

    function onChangeMyTitle(event){
      setMyTitle(event.target.value)
      if(myWriter !== "" && event.target.value !== "" && myContents !== ""){
        setQqq(true);
      }else{
        setQqq(false);
      }
    }

    function onChangeMyContents(event){
      setMyContents(event.target.value)
      if(myWriter !== "" && myTitle !== "" && event.target.value !== ""){
        setQqq(true);
      }else{
        setQqq(false);
      }
    }

    async function aaa() {
        try {
          
          const result = await createBoard({
          variables: {writer: myWriter, title: myTitle, contents: myContents}
        })
        console.log(result)
        console.log(result.data.createBoard.number)
        //router.push('/05-06-dynamic-board-read.' +result.data.createBoard.number)//옛날 방식
        router.push(`/06-03-container-practice(read)/${result.data.createBoard.number}`)//템플릿 리터럴

        } catch(error){

          console.log(error)
        }
      
      
        
    }
    
          return< BoardWriteUI
      onChangeMyWriter={onChangeMyWriter}
      onChangeMyTitle={onChangeMyTitle}
      onChangeMyContents={onChangeMyContents}
      aaa={aaa}
      qqq={qqq}
      />

 } 
    
    
    