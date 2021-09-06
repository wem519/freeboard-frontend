//1. 문자열을 정수로 바꾸기(멘토님 풀이 방식)

function solution(s){
console.log(typeof Number(s))
return Number(s)
    }

//jsp는 명시적인 타입 정의가 없기 때문에 문자열에 숫자, 숫자열에 문자를 넣음으로써 자동으로 형변환이 출력된다.

//Number(), Sting()
//parseInt(): 문자 -->숫자
//parseFloat(): 숫자 --> 문자

//나머지 답변에 대해서는 한번 더 고민해볼 것(아직 이해 X)

//2. 같은 숫자는 싫어

function solution(arr) { 
    let answer = [];
    for(let i=0; i<arr.length; i++){
        if(arr[i] !== arr[i+1]){
            answer.push(arr[i]);
        }
    }
    return answer;
}

//3. 핸드폰 번호 가리기

function solution(phone_number) {
    let answer = '';
    
    for (let i = 0; i <phone_number.length; i++){
        if(i < phone_number.length-4){
            answer = answer + '*'
        }else{
            answer = answer + phone_number[i];
        }
    }
    return answer;
}

//다른 사람들 답변 중 효율적인 것 참고할 것