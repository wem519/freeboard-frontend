export default function TypeScriptPage(){
    
    //1. 문자타입 - 타입추론
    let aaa: string = "안녕하세요"
    aaa = 3

    
    //2. 문자타입
    let bbb: string;
    bbb= "반갑습니다"
    bbb = 123

    
    //3. 숫자 타입
    let ccc : number = 5 //변수명 : 타입지정
    

    //4. 객체 타입

    interface Iprofile {
        school: string
        age: number
    }
    let profile: Iprofile= {
        school: '다람쥐 초등학교',
        age: 13
    }

    //5.배열 타입
    let ddd : number[] = [1, 2, 3, 4, 5]
    let eee : (number  | string)[] = [1, 2, 3, 4, 5] // | '또는'에 하나만 사용 배열 안에 숫자나 문자 가능
    let fff : (number[]  | string[]) = [1, 2, 3, 4, 5] // | 배열 전체에 숫자만| 배열 전체에 문자만

    
    
    return<div>타입스크립트 페이지입니다</div>
}