import { 
    MyButton,
    Title 
} from "./BoardWrite.styles"

export default function BoardWriteUI(props){


    return(<>
     <Title zzz={props.zzz}>컨테이너 프리젠터 패턴</Title>
     작성자 : <input type="text" onChange={props.onChangeMyWriter}></input>
        제목 : <input type="text" onChange={props.onChangeMyTitle}></input>
        내용 :<input type="text"  onChange={props.onChangeMyContents}></input>
        <MyButton onClick={props.aaa} qqq={props.qqq}>GRAPHQL-API 요청하기</MyButton>
    </>
    )
}