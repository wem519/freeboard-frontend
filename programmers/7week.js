// 소수찾기(아직 이해X)

// 실패율

// 예산
function solution(d, budget) {
  const team = [];

  var answer = 0;
  // console.log(d)
  d.sort((a, b) => a - b);
  // console.log(d)
  let sum = 0;
  for (let i = 0; i < d.length; i++) {
    sum += d[i];
    // console.log(d[i], sum)
    if (sum <= budget) {
      team.push(d[i]);
    }
  }
  console.log(team);
  return team.length;
}
// 크레인 인형 뽑기
function solution(board, moves) {
  var answer = 0;
  const bucket = [];
  // console.log(board)
  for (let i = 0; i < moves.length; i++) {
    for (let l = 0; l < board.length; l++) {
      // console.log(moves[i], board[l])
      const doll = board[l][moves[i] - 1];
      // console.log(doll)
      if (doll !== 0) {
        board[l][moves[i] - 1] = 0;

        if (bucket[bucket.length - 1] === doll) {
          answer += 2;
          bucket.splice(bucket.length - 1, 1);
          // bucket.pop() 배열의 맨 끝에 있는 데이터 삭제
          break;
        }
        // console.log(bucket)
        bucket.push(doll);
        break;
      }
    }
  }
  // console.log(bucket)
  return answer;
}
