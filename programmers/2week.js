//1. 문자열을 정수로 바꾸기(멘토님 풀이 방식)

function solution(s){
console.log(typeof Number(s))
return Number(s)
    }

//jsp는 명시적인 타입 정의가 없기 때문에 문자열에 숫자, 숫자열에 문자를 넣음으로써 자동으로 형변환이 출력된다.

//Number(), Sting()
//parseInt(): 문자 -->숫자
//parseFloat(): 숫자 --> 문자

//나머지 답변에 대해서는 한번 더 고민해볼 것

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

//4. 짝수와 홀수
function solution(num) {
    if (num % 2 == 0) {
    return "Even";
  } else {
    return "Odd";
  }
}
//삼항 연산자로 다음과 같이 표현도 가능하다.
function solution(num){
    return num % 2 ===0 ?'Even': 'Odd'
}

//다른 사람들의 간단한 함수를 보면 이해 안가는 부분이 너무 많다.
//검색할 수 있는 것은 최대한 검색해보자.


//5.평균 구하기

//평균 구하기=모든 정수의 합 /정수의 갯수

function solution(arr) {
    var answer = 0;
    for  (var i=0; i<arr.length; i++){
        answer += arr[i]; //a+=b => a=a+b
    }    
    return answer / arr.length    
}

//6. 가운데 글자 가져오기

function solution(s){
    const half  =Math.floor(s.length / 2);
    
    if (s.length % 2 === 0){
    return s[half - 1] + s[half];
    }else{
    return s[half];
    }
}

//삼항연산자

function solution(s){
    const half  =  Math.floor(s.length / 2);
    
    return s.length % 2 ===0 ? s[half - 1] + s[half] : s[half]
}