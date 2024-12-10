// https://school.programmers.co.kr/learn/courses/30/lessons/42862

function solution(n, lost, reserve) {
  let answer = 0;

  const students = {};

  // 각 학생들이 가지고 있는 체육복 개수를 obj로 저장
  for (i = 1; i <= n; i++) {
    if (lost.includes(i) && !reserve.includes(i)) {
      // 여분 없이 도난 당한 경우
      students[i] = 0;
    } else if (!lost.includes(i) && reserve.includes(i)) {
      // 여분도 있는데 도단당하지 않은 경우
      students[i] = 2;
    } else {
      // 여분+도난, 여분x+도난x
      students[i] = 1;
    }
  }
  console.log('before :', students);

  lost = lost.sort((a,b) => a-b);
  // 잃어버린 학생들을 순서를 지켜서 옷을 빌려줘야 함.
  // 아래 주어진 예시처럼 sort하지 않은 경우,
  // 4번 학생이 3에게 옷을 먼저 받아 2번이 옷을 받을 수 없게 됨.

  for(let student of lost) {
    if (students[student] === 0) {
      if (students[student-1] === 2) {
        console.log(student, 'front')
        students[student-1]--;
        students[student]++;
      } else if (students[student+1] === 2) {
        console.log(student, 'back')
        students[student+1]--;
        students[student]++;
      }
    }
  }
  console.log('after  :', students);

  for(let student in students) {
    if (students[student] > 0) {
      answer++;
    }
  }

  return answer;
}

const n = 5;
const lost = [4,2];
const reserve = [5,3];
console.log(solution(n, lost, reserve));