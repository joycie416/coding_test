// https://school.programmers.co.kr/learn/courses/30/lessons/132267

function solution(a, b, n) {
  let answer = 0;
  let remaining = n;

  while (remaining >= a) {
    answer += Math.floor(remaining/a)*b;
    remaining = remaining%a + Math.floor(remaining/a)*b;
  }
  
  return answer;
}

console.log(solution(3,1,20))