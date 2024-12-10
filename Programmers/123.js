// https://school.programmers.co.kr/learn/courses/30/lessons/12941

function solution(A, B) {
  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);

  return A.reduce((acc, cur, idx) => acc + cur * B[idx], 0);
}

const A = [1, 4, 2];
const B = [5, 4, 4];
console.log(solution(A, B));

// function solution(A, B) {
//   let answer = Infinity;

//   const visited = Array.from(B, () => false);

//   const dfs = (idx, lv, current) => {
//     console.log(idx, lv);

//     if (visited[idx]) {
//       return;
//     }
//     console.log(idx, lv, current + A[lv] * B[idx]);
//     if (lv === B.length - 1) {
//       console.log("end point", lv);
//       answer = Math.min(current + A[lv] * B[idx], answer);
//       return;
//     }

//     visited[idx] = true;
//     for (const i in B) {
//       if (!visited[i]) {
//         dfs(i, lv + 1, current + A[lv] * B[idx]);
//       }
//     }
//     visited[idx] = false;
//   };

//   for (const idx in B) {
//     dfs(idx, 0, 0)
//     console.log("---");
//   }

//   return answer;
// }
