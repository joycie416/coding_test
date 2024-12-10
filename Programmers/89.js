// https://school.programmers.co.kr/learn/courses/30/lessons/131127

function solution(want, number, discount) {
  let answer = 0;
  const n = discount.length;
  let i = 9;

  for(const product of want) {
    if (!discount.includes(product)) {
      return answer;
    }
  }


  const counts = countProducts(discount.slice(0,10));
  do {
    console.log(counts, discount[i]);

    let isToRegister = true;
    for(let idx in want) {
      console.log(want[idx], counts[want[idx]] , number[idx])
      if (counts[want[idx]] !== number[idx]) {
        isToRegister = false;
        break;
      }
    }
    if (isToRegister) {
      answer++;
    }

    counts[discount[i-9]]--;

    console.log(discount[i-9], discount[i+1])

    if(counts[discount[i+1]]) {
      counts[discount[i+1]]++;
    } else {
      counts[discount[i+1]] = 1;
    }

    i++;
  } while (i < n);

  return answer;
}


function countProducts (want) {
  const wantCount = {};
  for (const product of want) {
    // if(!discount.includes(product)) {
    //   return 0;
    // } else {
      if (wantCount[product]) {
        wantCount[product]++;
      } else {
        wantCount[product] = 1;
      }
    // }
  }
  return wantCount;
}

const want = ["banana", "apple", "rice", "pork", "pot"]	;
const number = [3, 2, 2, 2, 1]	;
const discount = ["chicken", "apple", "apple", "banana", "rice", "apple", "pork", "banana", "pork", "rice", "pot", "banana", "apple", "banana"]	;
console.log(solution(want, number, discount))