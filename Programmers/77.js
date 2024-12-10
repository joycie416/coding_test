// https://school.programmers.co.kr/learn/courses/30/lessons/70129

function solution(s) {
  let countZero = 0;
  let count = 0;
  while(s !== '1') {
    s = s.split('0');
    console.log(s)
    countZero += s.length-1;
    s = s.join('');
    s = s.length.toString(2);
    count++;
  }
  
  return [count, countZero];
}

console.log(typeof (4).toString(2))
console.log(typeof parseInt('100',2))
console.log(solution('1111111'))