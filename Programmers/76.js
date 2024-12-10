// https://school.programmers.co.kr/learn/courses/30/lessons/12951

function solution(s) {
  var answer = s.toLowerCase().split(' ');

  for(const idx in answer) {
    if (!answer[idx]) {
      continue;
    }
    answer[idx] = answer[idx][0].toUpperCase() + answer[idx].slice(1);
  }

  return answer.join(' ');
}


// 다른 사람 풀이
function solution(s) {
  return s.split(" ").map(v => v.charAt(0).toUpperCase() + v.substring(1).toLowerCase()).join(" ");
}

console.log(solution("for  the last week"));
console.log("for  the last week".charAt('2'))
console.log("for  the last week"['asdf'])

