// https://school.programmers.co.kr/learn/courses/30/lessons/42842

// function solution(brown, yellow) {
//   const n = brown + yellow;
//   const sqrt = Math.floor(Math.sqrt(n));

//   for (let i = sqrt; i > 0; i--) {
//     if (n%i === 0) {
//       return [n/i, i].sort((a,b)=> b-a)
//     }
//   }

// }

// 다른 사람 코드
function solution(brown, yellow) {
  let yellowRow = 1;

  while((brown - yellowRow*2)/2 - 2 !== yellow/yellowRow) {
    yellowRow++;
  }

  return [yellow/yellowRow+2, yellowRow+2]
}

console.log(solution(18, 6))