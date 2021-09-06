import { useQuery } from "@apollo/client"
import { useRouter } from "next/router" 
import { FETCH_BOARD } from "./BoardRead.queries"
import BoardReadUI from "./BoardRead.presenter"


export default function BoardRead(){
    const router = useRouter()

    const { data } =useQuery(FETCH_BOARD,{
        variables:{ number: Number(router.query.number) }
    })
    
    //html안에서는 /* */이 주석

    return< BoardReadUI
    data={data} router={router}/>
}

