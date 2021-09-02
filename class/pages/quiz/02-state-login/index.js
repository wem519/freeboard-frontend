// import styled from '@emotion/styled'

import { Header,
         Wrapper,
         HeaderTitle, 
         Logo, Title, InputWrapper, InputEmail, InputPwd,Test } from "../../../styles/eatsroad";

// import {} from "../../../styles/eatsroad";

export default function EatsPage(){
    

    return(
        <Wrapper>
            <Header>
            </Header>
                <HeaderTitle>   
                    <Logo src="/logo.png"></Logo>
                    <Test></Test>
                    <Title>잇츠로드</Title>
                </HeaderTitle>
            <InputWrapper>
                <InputEmail type="text" placeholder="이메일을 입력해 주세요"></InputEmail>
                <InputPwd type="text" placeholder="비밀번호를 확인해 주세요"></InputPwd>    
            </InputWrapper> 
        </Wrapper>
            
        

    )
}