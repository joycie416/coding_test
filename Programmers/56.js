// https://school.programmers.co.kr/learn/courses/30/lessons/135808

function solution(k, m, score) {
  let answer = 0;
  if (score.length < m) {
    return answer; // 0
  }

  score = score.sort((a,b) => b-a); // 내림차순 정렬

  // while(score.length >= m) {
  //   // let tmp = score.splice(0,m);
  //   // console.log(score.splice(0,m));
  //   console.log('score :',score);
  //   answer += Math.min(...score.splice(0,m))*m;
  // }
  // 계산 시간이 너무 길어지는건 splice 탓?

  for (let i = 0; i < score.length; i += m) {
    // console.log(score.slice(i,i+m));
    answer += Math.min(...score.slice(i,i+m))*m;
  }
  
  return answer;
}

const k = 4;
const m = 3;
const score = [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2];
console.log(score.sort((a, b) => a - b).slice(score.length % m))
console.log(solution(k, m, score))