// https://school.programmers.co.kr/learn/courses/30/lessons/138476

function solution(k, tangerine) {
  let total = 0;

  // const sizeArr = Array.from(new Set(tangerine)).map((ele) => tangerine.filter((el) => el === ele).length);
  // sizeArr.sort((a, b) => b-a);

  const sizeObj = new Map();
  for (const size of tangerine) {
    sizeObj.set(size, (sizeObj.get(size) || 0) + 1);
  }
  console.log(sizeObj.values())

  // console.log(sizeArr);

  // for (const idx in sizeArr) {
  //   // console.log(idx)
  //   total += sizeArr[idx];

  //   if (total >= k) {
  //     return +idx+1
  //   }
  // }
  let answer = 0;
  for (const count of [...sizeObj.values()].sort((a,b) => b-a)) {
    // console.log(total);
    total += count;
    answer++;

    if (total >= k) {
      return answer;
    }
  }
}

const tangerine = [1, 1, 1, 1, 2, 2, 2, 3]	
const k = 2;
console.log(solution(k, tangerine));
