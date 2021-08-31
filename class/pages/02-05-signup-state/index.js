import {useState} from 'react'
import styled from '@emotion/styled'
export default function SignupStatePage(){

const [email, setEmail] = useState("")
const [emailError, setEmailError] =useState("")

const [password1, setPassword1] = useState("")
const [passwordError, setPasswordError]= useState("")
const [password2, setPassword2] = useState("")
const [passwordError2, setPasswordError2] = useState("")

const ErrorEmail = styled.div`
        font-size: 10px;
        color: red;
    `

const ErrorPassword = styled.div`
        font-size: 10px;
        color: red;
`
const ErrorPassword2 = styled.div`
        font-size: 10px;
        color: red;
`
    

function onChangeEmail(event){
    setEmail(event.target.value)

}    
function onChangePassword1(event){
    setPassword1(event.target.value)

}
function onChangePassword2(event){
    setPassword2(event.target.value)

}
function onClickSignup(){
    // console.log('email: ', email)
    // console.log('password1: ', password1)
    // console.log('password2: ', password2)

    
    if(!email.includes("@")){
        setEmailError("@가 없습니다!")
        // alert("@가 없습니다!")
    }
    if(password1 !== password2){
        // alert("비밀번호1과 비밀번호2가 다릅니다")
        setPasswordError("비밀번호를 정확히 입력해 주세요")
        setPasswordError2("비밀번호를 정확히 입력해 주세요")
    }else{
        setPasswordError("")
        setPasswordError2("")
    }

}
return(

        <div>
            이메일:<input type="text" onChange={onChangeEmail}/><br/>
            <ErrorEmail>{emailError}</ErrorEmail>{/* emotion으로 색과 사이즈 변경하기 */}
            비밀번호:<input type="password" onChange={onChangePassword1}/><br/>
            <ErrorPassword>{passwordError}</ErrorPassword>
            비밀번호확인:<input type="password" onChange={onChangePassword2}/><br/>
            <ErrorPassword2>{passwordError2}</ErrorPassword2>
            <button onClick={onClickSignup}>회원가입하기</button>
        </div>
    )
}