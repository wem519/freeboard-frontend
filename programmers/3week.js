//1.문자열 내 p와 y의 개수

function solution(s) {
  const check = {
    p: 0,
    y: 0,
  };
  s = s.toLowerCase();
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "p" || s[i] === "y") {
      check[s[i]] += 1;
    }
  }
  return check.p === check.y;
}

//method사용

//2. 이상한 문자 만들기

function solution(s) {
  let answer = "";
  let idx = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "") {
      idx = 0;
      answer += " ";
    } else {
      answer =
        answer + (idx % 2 === 0 ? s[i].toUpperCase() : s[i].toLowerCase());
      idx += 1;
    }
  }
  return answer;
}

//method방법

function solution(s) {
  const answer = s
    .split(" ")
    .map((str) => {
      return str
        .split("")
        .map((letter, i) => {
          return i % 2 === 0 ? letter.toUpperCase() : letter.toLowerCase();
        })
        .join("");
    })
    .join(" ");
  return answer;
}

//3. 자연수 뒤집어 배열

function solution(n) {
  var arr = n.toString().split("");
  var answer = [];

  for (var i = arr.length - 1; i >= 0; i--) {
    answer.push(Number(arr[i]));
  }
  return answer;
}

//4. 나누어 떨어지는 숫자 배열

function solution(arr, divisor) {
  var answer = [];
  for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] % divisor === 0) answer.push(arr[i]);
  }
  answer.sort((a, b) => a - b);
  if (answer.length === 0) answer.push(-1);
  return answer;
}
