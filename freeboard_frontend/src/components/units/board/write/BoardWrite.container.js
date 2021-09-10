import BoardWriteUI from "./BoardWrite.presenter"
import { useState } from "react"
import { useMutation } from "@apollo/client"
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.queries"
import { useRouter } from "next/router" 
 
 export default function BoardWrite(props){
    const router = useRouter()
    
    const [createBoard] = useMutation(CREATE_BOARD)
    const [updateBoard] = useMutation(UPDATE_BOARD)
    
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
            router.push(`/boards/${result.data.createBoard._id}`)
        }
    }

    async function onClickUpdate(){
    try{     
       await updateBoard({
            variables: {
                boardId: router.query.read,
                password: pwd,
                updateBoardInput: {
                    title: text,
                    contents: contents,
                }
            }
        });
        router.push(`/boards/${router.query.read}`) 
    }catch(error){
        alert(error)
    }
}
    //     const result = updateBoard({
    //         variables: {
    //         boardId: router.query.read,
    //         password: pwd,
    //         updateBoardInput: {
    //             title: text,
    //             contents: contents,
    //         }
    //     }
    // })
    // router.push(`/boards/${result.data.updateBoard_id}`) 두가지 모두 값은 값을 출력한다. 

    return (
    < BoardWriteUI
    onChangeName={onChangeName}
    onChangePwd={onChangePwd}
    onChangeText={onChangeText}
    onChangeContents={onChangeContents}
    onClickSignup={onClickSignup}
    nameError={nameError}
    pwdError={pwdError}
    textError={textError}
    contentsError={contentsError}
    aaa={aaa}
    isEdit={props.isEdit}
    onClickUpdate={onClickUpdate}
    />
    )
 }   
    
    