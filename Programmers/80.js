// https://school.programmers.co.kr/learn/courses/30/lessons/12985

function solution(n, a, b) {
  if (a > b) {
    [a, b] = [b, a];
  }

  let answer = 0;

  while (a !== b) {
    a = Math.floor((a + 1) / 2);
    b = Math.floor((b + 1) / 2);
    answer++;
    console.log(answer, [a, b]);
  }

  return answer;
}

console.log(solution(16, 2,15));
