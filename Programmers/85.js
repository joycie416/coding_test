// https://school.programmers.co.kr/learn/courses/30/lessons/131701

function solution(elements) {
  // let sums = Array.from(new Set(elements));
  let sums = new Set(elements);
  let n = elements.length;
  elements = elements.concat(elements);
  // console.log(elements);

  for (let i = 0; i < n; i++) {
    for (let j = 1; j < n; j++) {
      const sum = elements.slice(i,i+j+1).reduce((acc, cur) => acc + cur);
      // if(!sums.includes(sum)) {
        sums.add(sum);
      // }
    }
  }

  return sums.length;
}

function solution(elements) {
  let sums = new Set();
  let n = elements.length;
  // elements = elements.concat(elements);
  // console.log(elements);

  let rotate = [...elements];
  for (let i = 0; i < n; i++) {
    let sum = 0;
    for (let j = 0; j < n; j++) {
      sum += rotate[j];
      sums.add(sum)
    }
    const tmp = rotate.shift();
    rotate.push(tmp);
  }

  return sums.size;
}

const arr = [7, 9, 1, 1, 4];
console.log(solution(arr));
