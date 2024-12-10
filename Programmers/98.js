// https://school.programmers.co.kr/learn/courses/30/lessons/154539

function solution(numbers) {
  const answer = [-1];

  let max = numbers.at(-1);
  let stack = [max];
  for (let i = numbers.length - 2; i >= 0; i--) {
    if (max <= numbers[i]) {
      answer.push(-1);
      max = numbers[i];
      stack = [max]
    } else {
      let j = 0;
      while (true) {
        if (numbers[i] < stack[j]) {
          answer.push(stack[j]);
          stack.unshift(numbers[i]);
          break;
        } else {
          stack.shift();
        }
      }
    }
      console.log(stack)
  }

  return answer.reverse();
}
const n = [9, 1, 5, 3, 6, 2]	;
console.log(solution(n))
