// https://school.programmers.co.kr/learn/courses/30/lessons/140107

// 원의 방정식 안쓰고 풀려고 했으나 시간초과
function solution(k, d) {
  let diag = 0;
  let nonDiag = 0;

  let x = 0,
    y = 0;
  while (2 * x * x <= d * d) {
    diag++;
    x += k;
  }
  nonDiag = ((x / k - 1) * (x / k)) / 2;

  while (x <= d) {
    while (x * x + y * y <= d * d) {
      y += k;
    }
    nonDiag += y / k;
    y = 0;
    x += k;
  }

  return diag + nonDiag * 2;
}

// 원의 방정식 사용
function solution(k, d) {
  let answer = 0;

  for (let x = 0; x <= d; x += k) {
    answer += Math.floor(Math.sqrt(d * d - x * x) / k) + 1;
  }

  return answer;
}

const [k, d] = [2, 4];
console.log(solution(k, d));
