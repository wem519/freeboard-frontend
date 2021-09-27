//1. 행렬의 덧셈

function solution(arr1, arr2) {
    var answer = [];
    for(var i=0; i<arr1.length; i++){
        answer[i] = [];
        // console.log(arr1)
        for(var j= 0; j<arr1[i].length; j++){
            answer[i][j] = arr1[i][j] + arr2[i][j];
        }
        // console.log(answer)
    }
    return answer;
}