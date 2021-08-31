import {useState} from "react"
export default function ValidationStatePage(){


    const [number, setNumber] =useState("000000")

    function getToken(){

        setNumber(String(Math.floor(Math.random() * 1000000)).padStart(6,"0"))
    }
    
    return(
        <div>  
            <div >{number}</div>
            <button onClick={getToken}>인증번호전송</button>
        </div>

    )
}
//Quiz 중 1,2를 제외하고 3번만 수업 이후의 하위 폴더에서 작성