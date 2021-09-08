export default function ExampleUI(props){

    return(

    <div>
        {/* <div>oo페이지</div> */}
        <div>{props.isEdit ? "수정페이지" : "등록페이지"}</div>
        <input type="text"/><br/>
        <input type="text"/><br/>
        <button>{props.isEdit ? "수정하기" : "등록하기"}</button>
    </div>
    )
}