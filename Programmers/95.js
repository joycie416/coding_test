// https://school.programmers.co.kr/learn/courses/30/lessons/92335

function solution(n, k) {
  let strN = n
    .toString(k)
    .split(0)
    .filter((ele) => ele !== "");

  let answer = 0;

  for(let num of strN) {
    if (isPrime(Number(num))) {
      answer++;
    }
  }
  
  return answer;
}

function isPrime(n) {
  if (n === 1) {
    return false;
  }
  for (let i = 2, sqrt = Math.floor(Math.sqrt(n)); i <= sqrt; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

const n = 110011;
const k = 10;
console.log(solution(n, k));
