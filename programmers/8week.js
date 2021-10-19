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
    // answer[i] = answer[i].join("")
  }
  return answer;
}
