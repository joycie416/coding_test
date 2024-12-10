// https://school.programmers.co.kr/learn/courses/30/lessons/155652

function solution(s, skip, index) {
  let answer = '';
  let alphabets = 'abcdefghijklmnopqrstuvwxyz';

  // 시저 암호와 동일하지만 제한된 글자만 사용함
  for(const str of [...skip]) {
    alphabets = alphabets.replace(str,'');
  }
  
  // 시저암호 구현 코드와 아래는 동일
  const LEN = alphabets.length;
  for(const str of [...s]) {
    const strIdx = alphabets.indexOf(str);
    const movedIdx = (strIdx + index) % LEN;
    answer += alphabets[movedIdx];
  }

  return answer;
}

console.log(solution('aukks','wbqd', 5));