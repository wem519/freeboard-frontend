export default function ValidationLetPage(){

    function getToken(){
        const token = String(Math.floor(Math.random() * 1000000)).padStart(6,"0")
        document.getElementById("aaa").innerText = token
    }
    
    
    return(
        <div>  
            <div id="aaa">000000</div>
            <button onClick={getToken}>인증번호전송</button>
        </div>
    )
}

//Quiz 중 1,2,4를 제외하고 3번만 수업 이후의 하위 폴더에서 작성