// https://school.programmers.co.kr/learn/courses/30/lessons/132265

function solution(topping) {
  let answer = 0;

  const left = new Map();
  const right = new Map();
  for (let i = 0, l = topping.length; i < l; i++) {
    right.set(
      topping[i],
      right.get(topping[i]) ? right.get(topping[i]) + 1 : 1
    );
  }
  for (let i = 0, l = topping.length; i < l; i++) {
    left.set(topping[i], left.get(topping[i]) ? left.get(topping[i]) + 1 : 1);
    if (right.get(topping[i]) === 1) {
      right.delete(topping[i]);
    } else {
      right.set(topping[i], right.get(topping[i]) - 1);
    }

    if(left.size === right.size) {
      answer++;
    }
  }

  return answer;
}



const t = [1, 2, 3, 1, 4]	
console.log(solution(t))