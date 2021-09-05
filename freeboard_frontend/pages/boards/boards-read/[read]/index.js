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
} from "../../../../styles/boards2"
import {useRouter} from 'next/router'
import {useQuery, gql} from '@apollo/client'

const FETCH_BOARD = gql`
    query fetchBoard($boardId:ID!){
        fetchBoard(boardId: $boardId){
            writer
            title
            contents
        }
    }

`


export default function RouterReadPage(){

    const router = useRouter()

    const { data } = useQuery(FETCH_BOARD,{
        variables:{boardId : router.query.read}
    })
    
    
    return(
        <Wrapper>
            <Address/>
            <Headers>
                <User src="/user.png"/>
                <Manage>
                    <Name>{data?.fetchBoard.writer}</Name>
                    <Date>Date:2021.02.18</Date>    
                </Manage>
                <Attach src="/attach.png"/>
                <Location src="/location2.png"/>
            </Headers>
            <Line/>
            <Title>{data?.fetchBoard.title}</Title>
            <BodyWrapper>
                <ImageInput src="/image.png"></ImageInput>
                <TextInput>{data?.fetchBoard.contents}</TextInput>
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