import {
    Address,
    Wrapper,
    Headers,
    Line,
    User,
    Manage,
    Attach,
    Location,
    Name,
    Date,
    Title,
    BodyWrapper,
    ImageInput,
    TextInput,
    YoutubeInput,
    FeelingWrapper,
    Feeling,
    Good,
    GoodCount,
    Hate,
    HateCount
} from "../../../../components/units/board/detail/BoardDetail.styles"

export default function BoardDetailUI(props){

    return(
        <Wrapper>
            <Address/>
            <Headers>
                <User src="/user.png"/>
                <Manage>
                    <Name>{props.data?.fetchBoard.writer}</Name>
                    <Date>Date:2021.02.18</Date>    
                </Manage>
                <Attach src="/attach.png"/>
                <Location src="/location2.png"/>
            </Headers>
            <Line/>
            <Title>{props.data?.fetchBoard.title}</Title>
            <BodyWrapper>
                <ImageInput src="/image.png"></ImageInput>
                <TextInput>{props.data?.fetchBoard.contents}</TextInput>
                <YoutubeInput src="/video.png"></YoutubeInput>
            </BodyWrapper>
            <FeelingWrapper>
                <Feeling>
                    <Good src="/good.png"></Good>
                    <GoodCount>1920</GoodCount>
                </Feeling>
                <Feeling>
                    <Hate src="/bad.png"></Hate>
                    <HateCount>3920</HateCount>
                </Feeling>           
            </FeelingWrapper>
        </Wrapper>
        
    )
}

