import axios from 'axios'

export default function RestGetPage(){

    async function zzz(){
       const result = await axios.get('https://koreanjson.com/posts/1') 
       console.log(result)
    }
    // async와 await의 사용법
    
    return(
        <button onClick={zzz}>REST-API 요청하기</button>
    )
}