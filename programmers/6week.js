//포켓몬

function solution(nums) {
  // var answer = 0;
  const pocket = [];
  //포켓몬들을 담는 배열
  for (let i = 0; i < nums.length; i++) {
    if (pocket.includes(nums[i]) === false && pocket.length < nums.length / 2) {
      // console.log(nums[i])
      pocket.push(nums[i]);
    }
    console.log(pocket, i);
  }
  return pocket.length;
}

// 피보나치 수
function solution(n) {
  let numbers = [0, 1];
  for (let i = 2; i <= n; i++) {
    numbers.push((numbers[i - 1] + numbers[i - 2]) % 1234567);
  }
  return numbers[n];
}

// 어떤 문장의 각 알파벳을 일정한 거리만큼 밀어서 다른 알파벳으로 바꾸는 암호화 방식을 시저 암호라고 합니다. 예를 들어 "AB"는 1만큼 밀면 "BC"가 되고, 3만큼 밀면 "DE"가 됩니다. "z"는 1만큼 밀면 "a"가 됩니다. 문자열 s와 거리 n을 입력받아 s를 n만큼 민 암호문을 만드는 함수, solution을 완성해 보세요.

// 시저함수

function solution(s, n) {
  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lower = "abcdefghijklmnopqrstuvwxyz";
  let answer = "";

  for (let i = 0; i < s.length; i++) {
    const str = s[i];
    // 문자가 아닌 공백일 경우 덧셈 할당
    if (str == " ") {
      answer += " ";
      continue;
    }

    // 대문자 문자열에 해당하는 문자가 있을 시 upper, 없다면 lower 할당
    const upperOrLower = upper.includes(str) ? upper : lower;
    // 할당한 문자열에 매개변수 s에 해당하는 인덱스와 n 더하기
    let index = upperOrLower.indexOf(str) + n;
    // 만약 더한 인덱스가 할당한 문자열의 길이보다 길거나 같을 경우 인덱스 - 문자열 길이 빼기
    if (index >= upperOrLower.length) {
      index -= upperOrLower.length;
    }
    // 계산한 인덱스에 해당하는 문자 덧셈 할당
    answer += upperOrLower[index];
  }

  return answer;
}

// 체육복

function solution(n, lost, reserve) {
  const losted = [...lost];
  lost = lost
    .filter((student) => !reserve.includes(student))
    .sort((a, b) => a - b);
  reserve = reserve
    .filter((student) => !losted.includes(student))
    .sort((a, b) => a - b);
  let answer = n - lost.length;

  for (let i = 0; i < lost.length; i++) {
    const student = lost[i];
    // console.log(student)

    if (reserve.includes(student - 1)) {
      reserve.splice(reserve.indexOf(student - 1), 1);
      answer++;
    } else if (reserve.includes(student + 1)) {
      reserve.splice(reserve.indexOf(student + 1), 1);
      answer++;
    }
    // console.log(reserve)
  }
  return answer;
}
