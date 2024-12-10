// https://school.programmers.co.kr/learn/courses/30/lessons/12949

function solution0(arr1, arr2) {
  const answer = [];
  const [r1, c1, c2] = [arr1.length, arr2.length, arr2[0].length];

  for (let r = 0; r < r1; r++) {
    const row = [];
    for (let c = 0; c < c2; c++) {
      let tmp = 0;
      for (let t = 0; t < c1; t++) {
        tmp += arr1[r][t] * arr2[t][c];
      }
      row.push(tmp);
    }
    answer.push(row);
  }

  return answer;
}

function solution(arr1, arr2) {
  const answer = [];
  const [r1, c1, c2] = [arr1.length, arr2.length, arr2[0].length];

  for (let r = 0; r < r1; r++) {
    const row = [];
    for (let c = 0; c < c2; c++) {
      row.push(
        arr1[r].reduce((acc, cur, curIdx) => acc + cur * arr2[curIdx][c], 0)
      );
    }
    answer.push(row);
  }

  return answer;
}

const arr1 = [
  [2, 3, 2],
  [4, 2, 4],
  [3, 1, 4],
];
const arr2 = [
  [5, 4, 3],
  [2, 4, 1],
  [3, 1, 1],
];
console.log(solution(arr1, arr2));
