function solution(n) {
  let answer = n.toString(3).split("").reverse().join("");
  return parseInt(answer, 3);
}
console.log(solution(45));

// toSrting은 n진수 변환에도 사용
