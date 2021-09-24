//1. 하샤드 수
// 1. x를 문자열로 바꾼다. (예시: 18 -> "18")
// 2. 문자열 x를 한 문자씩 쪼갠다. ("18" -> [ '1', '8' ]
// 3. 문자를 숫자로 바꾼 후 변수 sum에 더한다. (sum = 9)
// 4. x가 sum으로 나누어지는지 검사한다.
function solution(x) {
  let sum = 0;
  let arr = String(x).split("");
  for (let i = 0; i < x.length; i++) {
    sum += Number(arr[i]);
    if (x % sum === 0) return true;
    return false;
  }
}

//2. 내적

function solution(a, b) {
  let result = 0;
  for (let i = 0; i < a.length; i++) {
    result += a[i] * b[i];
    // console.log(b);
  }
  return result;
}

//3. 제일 작은 수 제거하기

function solution(arr) {
  var answer = [];
  for (let i = 0; i < arr.length; i++) {}
  if ((arr.splice(arr.indexOf(Math.min(arr))), 1)) {
    answer = arr;
  } else {
    arr.length <= 1;
    return [-1];
  }
  return answer;
}
