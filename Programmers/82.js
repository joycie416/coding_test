// https://school.programmers.co.kr/learn/courses/30/lessons/12914

function solution(n) {
  if (n === 1) {
    return 1;
  } else if (n === 2) {
    return 2;
  } else {
    let [a,b] = [1,2];
    for (let i = 3; i <= n;i++) {
      [a,b] = [b%1234567, (a+b)%1234567];
    }
    return b;
  }
}