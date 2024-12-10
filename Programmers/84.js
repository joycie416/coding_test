// https://school.programmers.co.kr/learn/courses/30/lessons/76502

function solution(s) {
  let answer = 0;
  const brackets = { "(": 1, ")": -1, "{": 2, "}": -2, "[": 3, "]": -3 };

  const len = s.length;
  for (let idx = 0; idx < len; idx++) {
    const tmp = s.slice(idx, len) + s.slice(0, idx);
    console.log(idx, tmp);

    const stack = [brackets[tmp[0]]];
    for (let i = 1; i < len; i++) {
      // stack.push(brackets[tmp[i]]);
      if (stack.at(-1) > 0 && brackets[tmp[i]] === -stack.at(-1)) {
        stack.pop();
        // stack.pop();
        console.log('o', stack)
      } else {
        // console.log(brackets[tmp[i]], -stack.at(-1));
        stack.push(brackets[tmp[i]]);
        console.log('x', stack)
      }
    }

    console.log(stack);
    if (stack.length === 0) {
      answer++;
      console.log("ok", tmp);
    }
  }

  return answer;
}

const s = "}]()[{";
console.log(solution(s));
// console.log([5,3,1,65].at(-2))
