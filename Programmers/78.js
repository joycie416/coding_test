// https://school.programmers.co.kr/learn/courses/30/lessons/12945

function solution(n) {

  const fibArray = [0,1];

  for (i = 2;i<=n;i++){
    fibArray.push((fibArray[i-2]+fibArray[i-1])%1234567)
  }

  return fibArray.at(-1);
}

function solution(n) {
  let a = 0, b = 1, f = 1;
  for (let i = 2; i <= n; i++) {
    f = (a + b)%1234567;
    a = b%1234567;
    b = f;
  }
  return f;
}