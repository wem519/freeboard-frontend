import { useRouter } from "next/router"

export default function DynamicRoutedPage(){

    const router = useRouter();
    console.log();
    
    return(
        <>  
        <div>{router.query.aaa} 번 페이지 입니다.</div>
        <div>동적 페이지 이동완료</div>
        </>
    )
}