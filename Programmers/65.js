// https://school.programmers.co.kr/learn/courses/30/lessons/140108

function solution(s) {
  let answer = 0;

  const len = s.length;
  let x = s[0];
  let cntX = 1;
  let cntO = 0;
  for(let i = 1; i < len; i++) {
    if (cntX === cntO) {
      x = s[i];
      answer++;
      cntX = 1;
      cntO = 0;
      console.log(i, x, s.slice(0,i));
    } else {
      if (s[i] === x) {
        cntX++;
      } else {
        cntO++;
        console.log('other', x, s[i], cntX, cntO)
      };
    }
  }
  // if (cntX !== cntO) {
    answer++;
  // }

  return answer;
}


console.log(solution("aaabbaccccabba"))