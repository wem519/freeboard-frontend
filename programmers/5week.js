//1. 행렬의 덧셈

function solution(arr1, arr2) {
  var answer = [];
  for (var i = 0; i < arr1.length; i++) {
    answer[i] = [];
    // console.log(arr1)
    for (var j = 0; j < arr1[i].length; j++) {
      answer[i][j] = arr1[i][j] + arr2[i][j];
    }
    // console.log(answer)
  }
  return answer;
}

//2. 2016년
function solution(a, b) {
  var week = new Array("SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT");
  var date = new Date("2016-" + a + "-" + b).getDay();
  console.log(date);
  var answer = week[date];

  return answer;
}

//3. 최대공약수와 최소공배수

function solution(n, m) {
  let answer = [];
  const gcdArr = [];
  //최대공약수 구하기
  for (let i = 1; i <= m; i++) {
    // console.log(i)
    if (n % i === 0 && m % i === 0) {
      gcdArr.push(i);
    }
  }
  answer[0] = Math.max(...gcdArr);
  for (let l = m; l <= n * m; l += m) {
    if (l % n === 0) {
      answer[1] = l;
      break;
    }
  }
  return answer;
}

//4. 완주하지 못한 선수

function solution(participant, completion) {
  participant.sort();
  completion.sort();
  console.log(participant, completion);
  for (var i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) {
      return participant[i];
    }
  }
}
// function solution(participant, completion) {
//   let answer = "";
//   participant.sort((a, b) => (a < b ? -1 : 1));
//   completion.sort((a, b) => (a < b ? -1 : 1));

//   for (let i = 0; i < participant.length; i++) {
//     // console.log(participant[i], completion[i]);
//     if (participant[i] !== completion[i]) {
//       answer = participant[i];
//       return answer;
//     }
//   }

// }
