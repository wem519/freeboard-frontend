import BoardDetailUI from "./BoardDetail.presenter"
import { useQuery } from "@apollo/client"
import { useRouter } from "next/router"
import { FETCH_BOARD } from "./BoardDetail.queries"

 export default function BoardDetail(){
    
    const router = useRouter()

    const { data } = useQuery(FETCH_BOARD,{
        variables:{boardId : router.query.read}
    })
    
    return< BoardDetailUI
    data={data}
    router={router}/>
 }   
    
    
    