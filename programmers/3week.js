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

//5. 콜라츠 추측

function solution(num) {
  var answer = 0;
  while (num !== 1) {
    if (answer > 500) {
      return -1;
    }
    num % 2 === 0 ? (num = num / 2) : (num = num * 3 + 1);
    answer++;
  }
  return answer;
}

//다른 사람 풀이에 있는 이중 삼항 연사자 실행 구조에 대한 이해 필요

//6. 두 개 뽑아서 더하기

function solution(numbers) {
  const answer = [];
  // 1. numbers에서 서로 다른 두 수를 뽑아서 더하지만 리그가 아닌 토너먼트식 경기로 생각.
  // numbers[1] + numbers[2] == numbers[2] + numbers[1] 이기 때문임.
  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      // 두 인자를 더해 sum에 저장
      const sum = numbers[i] + numbers[j];
      // 요소가 배열에 존재하는지 확인하고 배열을 업데이트
      if (answer.indexOf(sum) == -1) {
        //answer[]에 sum의 값이 없으면
        answer.push(sum); //answer[]에 sum값을 추가한다.
      }
    }
  }
  // 2. 더한 것들을 오름차순으로 정렬 (결과)
  answer.sort((a, b) => a - b);
  return answer;
}
