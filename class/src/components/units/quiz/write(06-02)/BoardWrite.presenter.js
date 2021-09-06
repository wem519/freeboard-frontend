import { MyButton } from "../../quiz/write(06-02)/BoardWrite.styles"

export default function BoardWriteUI(props){


     return(
        <>  
           작성자 : <input type="text" onChange={props.onChangeMyWriter}></input>
           제목 : <input type="text" onChange={props.onChangeMyTitle}></input>
           내용 :<input type="text"  onChange={props.onChangeMyContents}></input>
           <MyButton onClick={props.aaa} qqq={props.qqq}>GRAPHQL-API 요청하기</MyButton>
       </>
       )
}
