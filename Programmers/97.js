// https://school.programmers.co.kr/learn/courses/30/lessons/84512

const VOWELS = ["A", "E", "I", "O", "U"];

function solution(word) {
  let answer = 0;

  for (let i = 0; i < 5; i++) {
    console.log(i, word[i]);
    const idx = VOWELS.indexOf(word[i]);
    if (idx === -1) {
      break;
    }
    for (let j = i; j < 5; j++) {
      answer += idx * Math.pow(5, 4 - j);
      console.log(j, answer)
    }
    answer ++;
    console.log(answer);
  }

  return answer;
}

const w = "EIO";
console.log(solution(w));