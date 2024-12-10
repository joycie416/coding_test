// https://school.programmers.co.kr/learn/courses/30/lessons/161989

function solution(n, m, section) {
  let answer = 1;
  let tmp = section[0];

  section.forEach((pos) => {
    if (pos >= tmp + m) {
      tmp = pos;
      console.log('new area :', tmp);
      answer++;
    }
  })


  return answer;
}

console.log(solution(8,4,[2,3,6]));