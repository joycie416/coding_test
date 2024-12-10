// https://school.programmers.co.kr/learn/courses/30/lessons/77485

function solution(rows, columns, queries) {
  const answer = [];
  const matrix = Array.from(Array(rows), (_, row) =>
    Array.from(Array(columns), (_, idx) => row * columns + idx + 1)
  );

  for (const query of queries) {
    const [r1, c1, r2, c2] = query;
    let min = matrix[r1 - 1][c1 - 1];

    let cur = matrix[r1 - 1][c1 - 1];
    matrix[r1 - 1][c1 - 1] = matrix[r1][c1 - 1];
    for (let i = c1; i < c2; i++) {
      const tmp = matrix[r1 - 1][i];
      if (tmp < min) min = tmp;
      matrix[r1 - 1][i] = cur;
      cur = tmp;
    }
    for (let i = r1; i < r2; i++) {
      const tmp = matrix[i][c2 - 1];
      if (tmp < min) min = tmp;
      matrix[i][c2 - 1] = cur;
      cur = tmp;
    }
    for (let i = c2-2; i >= c1-1; i--) {
      const tmp = matrix[r2 - 1][i];
      if (tmp < min) min = tmp;
      matrix[r2 - 1][i] = cur;
      cur = tmp;
    }
    for (let i = r2-2; i >= r1; i--) {
      const tmp = matrix[i][c1 - 1];
      if (tmp < min) min = tmp;
      matrix[i][c1 - 1] = cur;
      cur = tmp;
    }

    answer.push(min)
  }

  return answer;
}

const [rows, cols] = [6, 6];
const queries = [
  [2, 2, 5, 4],
  [3, 3, 6, 6],
  [5, 1, 6, 3],
];
console.log(solution(rows, cols, queries));
