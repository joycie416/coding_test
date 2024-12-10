// https://school.programmers.co.kr/learn/courses/30/lessons/159994

function solution(cards1, cards2, goal) {
  // var answer = 'yes';

  for (let word of goal) {
    if (cards1[0] === word) {
      cards1.shift();
    } else if (cards2[0] === word) {
      cards2.shift()
    } else {
      return 'No'
    }

    // cards1[0] === word ? cards1.shift() : (cards2[0] === word ? cards2.shift() : answer = 'No')

    // if (answer === 'No') {
    //   return answer;
    // }

  }
  return 'yes'

  // return answer;
}

const cards1 = ["i", "drink", "water"];
// const cards1 = ["i", "water", "drink"];
const cards2 = ["want", "to"];
const goal = ["i", "want", "to", "drink", "water"];
console.log(solution(cards1, cards2, goal));