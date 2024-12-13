// https://school.programmers.co.kr/learn/courses/30/lessons/148653

function solution(storey) {
  let answer = 0;
  let digit = 1;
  while (storey > 0) {
    const lastDigit = Math.floor(storey / digit) % 10;
    if (lastDigit < 5) {
      // 현위치 값이 5보다 작으면 빼기
      answer += lastDigit;
      storey -= (lastDigit) * digit;
    } else if (lastDigit > 5) {
      // 현위치 값이 5보다 크면 더하기
      answer += 10 - lastDigit;
      storey += (10 - lastDigit) * digit;
    } else {
      // 현위치 값이 5이면
      if (Math.floor(storey / (digit*10)) % 10 >= 5) {
        // 다음 값이 5이상이면 더하기
        answer += 10 - lastDigit;
        storey += (10 - lastDigit) * digit;
      } else {
        // 다음 값이 5미만이면 빼기
        answer += 10 - lastDigit;
        storey -= (10 - lastDigit) * digit;
      }
    }
    digit *= 10;
  }

  return answer;
}

const storey = 155;
console.log(solution(storey))