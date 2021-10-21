// 3진법 바꾸기

function solution(n) {
  let answer = n.toString(3).split("").reverse().join("");
  return parseInt(answer, 3);
}
console.log(solution(45));

// toSrting은 n진수 변환에도 사용

// 보물 지도

function solution(n, arr1, arr2) {
  const answer = [];

  for (let i = 0; i < arr1.length; i++) {
    answer[i] = [];
    const map1 = arr1[i].toString(2).padStart(n, "0");
    const map2 = arr2[i].toString(2).padStart(n, "0");
    // console.log("map1:",map1, "map2:" ,map2)
    for (let l = 0; l < map1.length; l++) {
      // console.log(map1[l], map2[l])
      if (map1[l] === "1" || map2[l] === "1") {
        answer[i][l] = "#";
      } else {
        answer[i][l] = " ";
      }
    }
    answer[i] = answer[i].join("");
  }
  return answer;
}

// 신규 아이디 추천
const filter = "qwertyuiopasdfghjklzxcvbnm1234567890-_.";

function solution(new_id) {
  // 1단계 : 대문자를 -> 소문자로 치환
  new_id = new_id.toLowerCase();

  let result = "";
  // 2단계 : 소문자, 숫자, 빼기, 밑줄, 맡춤표를 제외한 모든 문자 제거
  for (let i = 0; i < new_id.length; i++) {
    // console.log(new_id[i])
    if (filter.includes(new_id[i])) {
      result += new_id[i];
    }
  }
  // 3단계: .가 연속으로 들어오면 .하나로 치환
  while (result.includes("..")) {
    result = result.replace("..", ".");
  }
  // console.log(result)
  // 4단계: .가 처음이나 끝에 위치한다면 제거
  if (result[0] === ".") {
    result = result.substr(1);
  }
  function removeLastDot() {
    if (result[result.length - 1] === ".") {
      result = result.slice(0, result.length - 1);
    }
  }

  removeLastDot();
  // 5단계: 빈 문자열이라면 "a" 대입
  if (result === "") {
    result = "a";
  }
  // 6단계: 문자열 길이가 16 이상이면 15의 길이값을 가지는 문자열로 치환, 제거 후에 마침표가 끝에 위하면 제거
  if (result.length >= 16) {
    result = result.slice(0, 15);
    removeLastDot();
  }
  // 7단계: 문자열 길이가 2자 이하라면, 마지막 글자를 3이 될때가지 반복해서 추가
  if (result.length <= 2) {
    result = result.padEnd(3, result[result.length - 1]);
  }
  return result;
}
