// https://school.programmers.co.kr/learn/courses/30/lessons/138476

function solution(k, tangerine) {
  let total = 0;
  const queue = [];

  const numArr = Array.from(new Set(tangerine)).map(
    (ele) => tangerine.filter((el) => el === ele).length
  );

  console.log(numArr);

  for (const num of numArr) {
    if (total < k) {
      console.log(1, queue, total);

      total += num;
      queue.push(num);
      continue;
    }
    if (total - queue[0] + num > total) {
      console.log(2, queue, total);

      queue.shift();
      queue.push(num);
      total += num;

      while (total - queue[0] >= k) {
        console.log(2.5, queue, total);
        total -= queue[0];
        queue.shift();
      }
    } else {
      console.log(3, queue, total);
      continue;
    }
  }

  return queue.length;
}

const tangerine = [1, 3, 4, 2, 5, 5, 2, 3];
const k = 6;
console.log(solution(k, tangerine));
