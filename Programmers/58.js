// https://school.programmers.co.kr/learn/courses/30/lessons/12977

function solution(nums) {
  let answer = 0;
  let n = nums.length;

  for (let i = 0; i < n - 2; i++) {
    for (let j = i + 1; j < n - 1; j++) {
      for (let k = j + 1; k < n; k++) {
        let sum = nums[i] + nums[j] + nums[k];
        if (isPrime(sum)) {
          answer++;
        }
      }
    }
  }

  return answer;
}

function isPrime(num) {
  let sqrt = Math.floor(Math.sqrt(num));
  let p = 2;
  while (p < sqrt) {
    if (num % p === 0) {
      return false;
    }
    p++;
  }
  if (p === sqrt && num % p !== 0) {
    return true;
  } else {
    return false;
  }
}