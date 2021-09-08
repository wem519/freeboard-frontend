import {gql, useMutation, useQuery} from '@apollo/client'
import styled from '@emotion/styled'

const Row = styled.div`
    display: flex;
    flex-direction:row;
    border-bottom: 1px solid black;
`
const Column = styled.div`
    width:20%;
`


const FETCH_BOARDS = gql`
    query{
        fetchBoards{
        number
        writer
        title
        contents
        createdAt
        }
    }
`

const DELETE_BOARD = gql`
    mutation deleteBoard($number: Int){
    deleteBoard(number:$number){
          message
    }
  }
`

export default function MapSelectorPage(){
    //fetchBoards
    const [deleteBoard]= useMutation(DELETE_BOARD)
    const { data } = useQuery(FETCH_BOARDS)
    // data.fetchBoards //[{}, {}, {}]
    
    async function onClickDelete(event){
        Number(event.target.id)
        
        await deleteBoard({
            variables:{number: Number(event.target.id)},
            refetchQueries :[{ query : FETCH_BOARDS }]// fetchBoard새로 출력
        })

    }
    
    return(
        //여기에 fetchBoard
        <div>
            {data?.fetchBoards.map((el, index) =>(
                <Row key={el.number}> {/* 전체 중 구별할 수 있는 걸로 지정 */}
                    <Column>
                        <input type="checkbox"/>
                    </Column>
                    <Column>{el.title}</Column> 
                    <Column>{index}</Column> 
                    <Column>{el.writer}</Column> 
                    <Column>{el.createdAt}</Column> 
                    <Column>
                        <button id={el.number} onClick={onClickDelete}>삭제하기</button>
                    </Column> 
                </Row>
                
            ))}
        </div>
    )
}

//prompt 