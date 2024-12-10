// https://school.programmers.co.kr/learn/courses/30/lessons/42586

function solution(progresses, speeds) {
  const answer = [];

  const remainingDays = progresses.map((progress, idx) =>
    Math.ceil((100 - progress) / speeds[idx])
  );

  console.log(remainingDays);

  let minTime = remainingDays[0];
  let cnt = 1;
  for(let i = 1, n = progresses.length; i < n; i++) {
    if (remainingDays[i] <= minTime) {
      cnt++;
    } else {
      answer.push(cnt);
      minTime = remainingDays[i];
      cnt = 1;
    }
  }
  answer.push(cnt)

  return answer;
}

const p = [95, 90, 99, 99, 80, 99]	
const s = [1, 1, 1, 1, 1, 1]	
console.log(solution(p, s));
