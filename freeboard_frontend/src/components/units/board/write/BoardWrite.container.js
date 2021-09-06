import BoardWriteUI from "../../../../components/units/board/write/BoardWrite.presenter"
import { useState } from "react"
import { useMutation } from "@apollo/client"
import { CREATE_BOARD } from "./BoardWrite.queries"
import router from "next/router"
 
 
 export default function BoardWrite(){
    const [createBoard] = useMutation(CREATE_BOARD)
    const[name, setName] = useState("")
    const[pwd, setPwd] = useState("")
    const[text, setText]= useState("")
    const[contents, setContents] =useState("")
    const[aaa, setAaa] = useState(false)
   
   
   const[nameError, setNameError] =useState("")
    const[pwdError, setPwdError] = useState("")
    const[textError, setTextError] = useState("")
    const[contentsError, setContentsError] = useState("")



    function onChangeName(event){
        setName(event.target.value)
        if(event.target.value !=="" && pwd !=="" && text !== "" && contents !==""){
            setAaa(true);    
        }else{
            setAaa(false);
        }
        if(event.target.value !== ""){
            setNameError("")
          }
    }
    function onChangePwd(event){
        setPwd(event.target.value)
        if(name !=="" && event.target.value !=="" && text !== "" && contents !==""){
            setAaa(true);    
        }else{
            setAaa(false);
        }
        if(event.target.value !==""){
            setPwdError("")
        }
    }
    function onChangeText(event){
        setText(event.target.value)
        if(name !=="" && pwd !=="" && event.target.value !== "" && contents !==""){
            setAaa(true);    
        }else{
            setAaa(false);
        }
        if(event.target.value !==""){
            setTextError("")
        }
    }
    function onChangeContents(event){
        setContents(event.target.value)
        if(name !=="" && pwd !=="" && text !== "" && event.target.value !==""){
            setAaa(true);    
        }else{
            setAaa(false);
        }
        if(event.target.value !==""){
            setContentsError("")
        }
    }

    async function onClickSignup(){

        if(name === ""){
            setNameError("이름이 없습니다.")
        }
        if(pwd === ""){
            setPwdError("비밀번호가 없습니다.")
        }
        if(text === ""){
            setTextError("제목이 없습니다")
        }
        if(contents === ""){
            setContentsError("내용이 없습니다.")
        }
        
        if( name !==""&& pwd !== "" && text !== "" && contents !==""){
            const result = await createBoard({
                variables:{
                    createBoardInput:{
                        writer: name,
                        password: pwd,
                        title: text,
                        contents: contents
                    }
                }
            })
            console.log(result.data.createBoard.writer)
            router.push(`/boards/boards-read/${result.data.createBoard._id}`)
        }
       
    }

    return< BoardWriteUI
    onChangeName={onChangeName}
    onChangePwd={onChangePwd}
    onChangeText={onChangeText}
    onChangeContents={onChangeContents}
    onClickSignup={onClickSignup}
    nameError={nameError}
    pwdError={pwdError}
    textError={textError}
    contentsError={contentsError}
    aaa={aaa}/>
 }   
    
    