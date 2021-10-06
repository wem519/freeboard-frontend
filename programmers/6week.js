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
