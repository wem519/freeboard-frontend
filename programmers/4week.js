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
