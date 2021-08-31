import styled from '@emotion/styled'
// import { Wrapper } from '../../../styles/Example'
import { Wrapper, Header, WrapperHeader, Search, HeaaderBody, My, HeaderProfile, Profile, Name, Arrow, HeaderFooter, NormalText, RedText, QuestionHeader, Question, QuestionText1, QuestionText2, Footer, FooterFixced, FixcedName, FixcedNameRed } from "../../../styles/My";

export default function MyPage(){


    return(
        <Wrapper>
         <Header>
            <WrapperHeader>
                <Search src ="/search.png"/>
            </WrapperHeader>
            <HeaaderBody>   
                <My>마이</My>
                <HeaderProfile>
                    <Profile src="/profile.png"/>
                    <Name>임정아</Name>
                    <Arrow src="/arrow.png"/>
                </HeaderProfile>
            </HeaaderBody> 
            <HeaderFooter>
                    <NormalText>공지사항</NormalText>
                    <NormalText>이벤트</NormalText>
                    <RedText>FAQ</RedText>
                    <NormalText>Q&A</NormalText>
            </HeaderFooter>
        </Header>   
        <QuestionHeader>
            <Question>
                <QuestionText1>Q.01</QuestionText1>
                <QuestionText2>리뷰 작성은 어떻게 하나요?</QuestionText2>
            </Question>
                <img src="/arrow-right.png"/> 
         </QuestionHeader>   
         <QuestionHeader>
            <Question>
                <QuestionText1>Q.01</QuestionText1>
                <QuestionText2>리뷰 작성은 어떻게 하나요?</QuestionText2>
            </Question>
                <img src="/arrow-right.png"/> 
         </QuestionHeader>   
         <QuestionHeader>
            <Question>
                <QuestionText1>Q.02</QuestionText1>
                <QuestionText2>리뷰 수정/삭제는 어떻게 하나요?</QuestionText2>
            </Question>
                <img src="/arrow-right.png"/> 
         </QuestionHeader>   
         <QuestionHeader>
            <Question>
                <QuestionText1>Q.03</QuestionText1>
                <QuestionText2>아이디/비밀번호를 잊어버렸어요.</QuestionText2>
            </Question>
                <img src="/arrow-right.png"/> 
         </QuestionHeader>   
         <QuestionHeader>
            <Question>
                <QuestionText1>Q.04</QuestionText1>
                <QuestionText2>회원탈퇴를 하고싶어요.</QuestionText2>
            </Question>
                <img src="/arrow-right.png"/> 
         </QuestionHeader>   
         <QuestionHeader>
            <Question>
                <QuestionText1>Q.05</QuestionText1>
                <QuestionText2>출발지 설정은 어떻게 하나요?</QuestionText2>
            </Question>
                <img src="/arrow-right.png"/> 
         </QuestionHeader>   
         <QuestionHeader>
            <Question>
                <QuestionText1>Q.06</QuestionText1>
                <QuestionText2>비밀번호를 변경하고 싶어요.</QuestionText2>
            </Question>
                <img src="/arrow-right.png"/> 
         </QuestionHeader>
         <Footer>
             <FooterFixced>
                 <img src="/home-unselected.png"/>
                 <FixcedName>홈</FixcedName>
             </FooterFixced>
             <FooterFixced>
                 <img src="/location-unselected.png"/>
                 <FixcedName>잇츠로드</FixcedName>
             </FooterFixced>
             <FooterFixced>
                 <img src="/like-unselected.png"/>
                 <FixcedName>마이찜</FixcedName>
             </FooterFixced>
             <FooterFixced>
                 <img src="/my-selected.png"/>
                 <FixcedNameRed>마이</FixcedNameRed>
             </FooterFixced>
        </Footer>   
                    
    </Wrapper>
    )
}