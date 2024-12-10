// https://school.programmers.co.kr/learn/courses/30/lessons/43165?language=javascript

function solution(numbers, target) {
  let answer = 0;

  function DFS(n, lv) {
    if (lv === numbers.length) {
      if (n === target) {
        answer++;
      }
      return;
    }
    console.log(lv, n, numbers[lv]);
    DFS(n + numbers[lv], lv + 1);
    DFS(n - numbers[lv], lv + 1);
  }
  DFS(0, 0);

  return answer;
}

const n = [4, 1, 2, 1];
const t = 4;
console.log(solution(n, t));
