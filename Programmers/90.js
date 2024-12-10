// https://school.programmers.co.kr/learn/courses/30/lessons/42578

function solution(clothes) {
  const counts = {};
  for (const [_, type] of clothes) {
    if(counts[type]) {
      counts[type]++;
    } else {
      counts[type] = 1;
    }
  }

  console.log(counts)
  return Object.values(counts).reduce((acc, cur) => acc*(cur+1), 1) - 1;
}

// 다른 사람 풀이
function solution(clothes) {
  return Object.values(clothes.reduce((obj, t)=> {
      obj[t[1]] = obj[t[1]] ? obj[t[1]] + 1 : 1;
      return obj;
  } , {})).reduce((a,b)=> a*(b+1), 1)-1;    
}

const clothes = [["yellow_hat", "headgear"], ["blue_sunglasses", "eyewear"], ["green_turban", "headgear"]]	;
console.log(solution(clothes))