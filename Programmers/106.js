// https://school.programmers.co.kr/learn/courses/30/lessons/131704

function solution(order) {
  const answer = [];

  const sorted = order
    .map((val, idx) => [val, idx])
    .sort((a, b) => b[0] - a[0])
    .map((val) => val[1] + 1);

  const stack = [];

  let idx = 1;
  let prevLengths = [sorted.length, 0];
  do {
    prevLengths = [sorted.length, stack.length];
    // console.log("sorted :", sorted);
    // console.log("stack :", stack);
    // console.log("answer :", answer);
    if (sorted.at(-1) === idx) {
      // console.log(1);
      answer.push(sorted.pop());
      idx++;
    } else if (stack.at(-1) === idx) {
      // console.log(2);
      answer.push(stack.pop());
      idx++;
    } else {
      // console.log(3);
      const pop1 = sorted.pop();
      if (pop1 !== undefined) {
        stack.push(pop1);
      }
      const pop2 = sorted.at(-1);
      if (pop2 !== undefined && pop2 === idx) {
        answer.push(sorted.pop());
        idx++;
      }
    }
    // console.log(sorted);
    // console.log();
  } while (prevLengths[0] !== sorted.length || prevLengths[1] !== stack.length);

  // console.log("answer :", answer);
  return answer.length;
}

const arr = [4, 3, 1, 2, 5]	
console.log(solution(arr));
