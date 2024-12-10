// https://school.programmers.co.kr/learn/courses/30/lessons/118667
// 참고 : https://velog.io/@sean2337/Programmers-%EB%91%90-%ED%81%90-%ED%95%A9-%EA%B0%99%EA%B2%8C-%EB%A7%8C%EB%93%A4%EA%B8%B0-JavaScript

function solution(queue1, queue2) {
  var answer = 0;

  let sum1 = queue1.reduce((sum, cur) => sum + cur);
  let sum2 = queue2.reduce((sum, cur) => sum + cur);
  if ((sum1 + sum2) % 2 === 1) {
    return -1;
  }

  const goal = Math.floor(sum1 + sum2);
  let idx1 = 0;
  let idx2 = 0;

  // 28번 core Dumped 나오는 것 해결
  let iter = 0;
  const maxIter = queue1.length * 4;

  if (sum1 === sum2) {
    return 0;
  } else {
    while (sum1 !== sum2 && iter < maxIter) {
      console.log(sum1, sum2, [idx1, idx2]);

      if (sum1 < sum2) {
        console.log(1);
        sum1 += queue2[idx2];
        sum2 -= queue2[idx2];
        queue1.push(queue2[idx2]);
        idx2++;
      } else if (sum1 > sum2) {
        console.log(2);
        sum2 += queue1[idx1];
        sum1 -= queue1[idx1];
        queue2.push(queue1[idx1]);
        idx1++;
      }
      answer++;

      if ((idx1 === queue1.length) | (idx2 === queue2.length)) {
        break;
      }
    }

    if (sum1 !== sum2) {
      return -1;
    }
    iter++;
  }

  return answer;
}

const q1 = [1, 2, 1, 2];
const q2 = [1, 10, 1, 2];
console.log(solution(q1, q2));
