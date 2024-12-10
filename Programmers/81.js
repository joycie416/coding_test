// https://school.programmers.co.kr/learn/courses/30/lessons/12953

function solution(arr) {
  function gcd(a,b) {
    if (a>b) {
      [a,b] = [b,a];
    }
    if (a === 0) {
      return b;
    }

    while(a > 0) {
      [a,b] = [b%a, a]
    }

    return b;
  }

  let answer = arr[0];

  for (let i = 1, n = arr.length; i<n ; i++) {
    const tmpGcd = gcd(answer, arr[i]);
    answer = answer*arr[i]/tmpGcd;
  }

  return answer;
}

const arr = [2,6,8,14];
console.log(solution(arr));