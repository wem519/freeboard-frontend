import axios from 'axios'
export default function RestApiPage(){

    function summit(){
        const result = axios.get('https://koreanjson.com/users')
        console.log(result)

     }

    return(

        <button onClick={summit}>REST-API 요청하기</button>
    )
}