import {Wrapper, Title, User, IdGroup, IdName, Text1, PwdGroup, PwdName, Text2, TextGroup, TextName, Text3,ContentGroup, ContentName, Text4, AddressGroup,PostName,PostWrapper, PostNumber, PostButton, Address, YoutubeGroup, YoutubeName, YoutubeText, PictureGroup, PictureName, Upload, RadioGroup, RadioName, RadioButton,RadioLabel, ButtonGroup, Cancel, Summit, ErrorComment } from "../../../styles/boards";
import  {useState} from 'react'
import {useMutation, gql} from "@apollo/client"

const CREATE_BOARD = gql`
mutation creatwBoard($createBoardInput:CreateBoardInput!){createBoard(createBoardInput:$createBoardInput){
    _id
    }
}
`

export default function BoardsNewPage(){

    const [createBoard] = useMutation(CREATE_BOARD)
    const[name, setName] = useState("")
    const[pwd, setPwd] = useState("")
    const[text, setText]= useState("")
    const[contents, setContents] =useState("")
   
   
   const[nameError, setNameError] =useState("")
    const[pwdError, setPwdError] = useState("")
    const[textError, setTextError] = useState("")
    const[contentsError, setContentsError] = useState("")



    function onChangeName(event){
        setName(event.target.value)
        if(event.target.value !== ""){
            setNameError("")
          }
    }
    function onChangePwd(event){
        setPwd(event.target.value)
        if(event.target.value !==""){
            setPwdError("")
        }
    }
    function onChangeText(event){
        setText(event.target.value)
        if(event.target.value !==""){
            setTextError("")
        }
    }
    function onChangeContents(event){
        setContents(event.target.value)
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
        console.log(result)
    }

    return(
        <Wrapper>  
            <Title>게시물 수정</Title>
            <User>
                <IdGroup>
                    <IdName>작성자</IdName>
                    <Text1 name="name" type="text" placeholder="이름을 적어주세요." onChange={onChangeName}></Text1>
                    <ErrorComment>{nameError}</ErrorComment>
                </IdGroup>
                <PwdGroup>
                    <PwdName>비밀번호</PwdName>
                    <Text2 name="pwd" type="password" placeholder="비밀번호를 입력해주세요." onChange={onChangePwd}></Text2>
                    <ErrorComment>{pwdError}</ErrorComment>
                </PwdGroup> 
            </User>
            <TextGroup>
                <TextName>제목</TextName>
                <Text3 name="text" type="text" placeholder="제목을 작성해주세요." onChange={onChangeText}></Text3>
                <ErrorComment>{textError}</ErrorComment>
            </TextGroup>
            <ContentGroup>
                <ContentName>내용</ContentName>
                <Text4 name="contents" placeholder="내용을 작성해주세요." onChange={onChangeContents}></Text4>
                <ErrorComment>{contentsError}</ErrorComment>
            </ContentGroup>
            <AddressGroup>
                <PostName>주소</PostName>
                <PostWrapper>
                    <PostNumber type="text" placeholder="07250"/>
                    <PostButton>우편번호 검색</PostButton>
                </PostWrapper>
                <Address type="text"></Address>
                <Address type="text"></Address>

            </AddressGroup>
            <YoutubeGroup>
                <YoutubeName>유투브</YoutubeName>
                <YoutubeText type="text" placeholder="링크를 복사해주세요"/>    
            </YoutubeGroup>
            <PictureGroup>
                <PictureName>사진 첨부</PictureName>
                <Upload>
                    <div>+</div>
                    <div>Upload</div>    
                </Upload>
                <Upload>
                    <div>+</div>
                    <div>Upload</div>    
                </Upload>
                <Upload>
                    <div>+</div>
                    <div>Upload</div>    
                </Upload>
            </PictureGroup>
            <RadioGroup>
                <RadioName>메인설정</RadioName>
                <RadioButton type="radio" id="youtube"></RadioButton>
                <RadioLabel htmlFor="youtube">유투브</RadioLabel>
                <RadioButton type="radio" id="image"></RadioButton>
                <RadioLabel htmlFor="image">사진</RadioLabel>
            </RadioGroup>
            <ButtonGroup>
                <Cancel>취소하기</Cancel>
                <Summit onClick={onClickSignup}>등록하기</Summit>
            </ButtonGroup>
        </Wrapper>
    )
}