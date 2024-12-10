// https://school.programmers.co.kr/learn/courses/30/lessons/42747

function solution(citations) {
  const cites = {};
  const sorted = citations.sort((a, b) => b - a);

  sorted.forEach((cite, idx) => {
    if (cites[cite]) {
      cites[cite]++;
    } else {
      cites[cite] = 1;
      if (cite !== sorted[idx - 1] && idx > 0) {
        cites[cite] += idx;
      }
    }
  });
  console.log(cites);
  // let [min, max] = [sorted.at(-1), sorted[0]];
  let tmp = cites[sorted[0]];
  for (let i = sorted[0]; i >= 0; i--) {
    if (!cites[i]) {
      // if (i > tmp) {
      //   cites[i] = 0;
      // } else {
      //   cites[i] = tmp;
      // }
    } else {
      tmp = cites[i];
    }
    if (tmp >= i) {
      return i;
    }
  }
}

const arr = [1, 1, 1, 1, 4, 5];
console.log(solution(arr));
