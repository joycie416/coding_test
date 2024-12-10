function solution(s) {
  var answer = [];

  for (let idx in s) {
    let subString = s.slice(0, idx);
    let i = subString.lastIndexOf(s[idx]);
    if (i === -1) {
      answer.push(i);
    } else {
      answer.push(idx - i);
    }
  }

  return answer;
}

console.log(solution("foobar"))
// console.log('abdcs'[0]);

// 위와 동일한 코드 using 삼항연산자+map
// const solution = (s) =>
//   [...s].map((char, i) => {
//     const count = s.slice(0, i).lastIndexOf(char);
//     return count < 0 ? count : i - count;
//   });


// 딕셔너리를 이용한 풀이
function solution(s) {
  const hash = {};
  return [...s].map((v, i) => {
    let result = hash[v] !== undefined ? i - hash[v] : -1;
    hash[v] = i;
    return result;
  });
}
