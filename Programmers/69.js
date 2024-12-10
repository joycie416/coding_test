//  https://school.programmers.co.kr/learn/courses/30/lessons/118666

function solution(survey, choices) {
  const myScore = { R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0 };

  const LEN = choices.length;
  for (let i = 0; i < LEN; i++) {
    const score = choices[i] - 4;
    if (score < 0) {
      myScore[survey[i][0]] += -score;
    } else if (score > 0) {
      myScore[survey[i][1]] += score;
    }
    // else {
    //   continue;
    // }
  }

  var answer = "";

  answer += myScore.R >= myScore.T ? 'R' : 'T'
  answer += myScore.C >= myScore.F ? 'C' : 'F'
  answer += myScore.J >= myScore.M ? 'J' : 'M'
  answer += myScore.A >= myScore.N ? 'A' : 'N'

  // if (myScore.R >= myScore.T) {
  //   answer += "R";
  // } else {
  //   answer += "T";
  // }
  // if (myScore.C >= myScore.F) {
  //   answer += "C";
  // } else {
  //   answer += "F";
  // }
  // if (myScore.J >= myScore.M) {
  //   answer += "J";
  // } else {
  //   answer += "M";
  // }
  // if (myScore.A >= myScore.N) {
  //   answer += "A";
  // } else {
  //   answer += "N";
  // }

  return answer;
}

// 다른 사람 코드
function solution(survey, choices) {
  const MBTI = {};
  const types = ["RT","CF","JM","AN"];

  types.forEach((type) =>
      type.split('').forEach((char) => MBTI[char] = 0)
  )

  choices.forEach((choice, index) => {
      const [disagree, agree] = survey[index];

      MBTI[choice > 4 ? agree : disagree] += Math.abs(choice - 4);
  });

  return types.map(([a, b]) => MBTI[b] > MBTI[a] ? b : a).join("");
}