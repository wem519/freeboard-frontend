import BoardListUI from "./BoardList.presenter"
import { FETCH_BOARDS} from "../../board/list/BoardList.queries"
import { useRouter } from "next/router"
import { useQuery } from "@apollo/client"

export default function BoardList(){

const router = useRouter();    //2번
const {data} =useQuery(FETCH_BOARDS)//1번


function onClickMoveToBoardDetail(event){
    router.push(`/boards/boards-read/${event.target.id}`); //3번
}

function onClickMoveToBoardNew(){
    router.push(`/boards/new`) //4번
}
    
    return<BoardListUI
    data={data}
    onClickMoveToBoardDetail={onClickMoveToBoardDetail}
    onClickMoveToBoardNew={onClickMoveToBoardNew}
    />
}