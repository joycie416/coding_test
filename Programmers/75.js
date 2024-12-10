// https://school.programmers.co.kr/learn/courses/30/lessons/12939

function solution(s) {
  const numArray = s.split(' ').map(Number).sort((a,b) => a - b);
  return ''+numArray[0]+' '+numArray.at(-1);
}

// 다른 사람 풀이
function solution(s) {
  const arr = s.split(' ');

  return Math.min(...arr)+' '+Math.max(...arr);
}