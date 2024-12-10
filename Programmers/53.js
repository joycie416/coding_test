// https://school.programmers.co.kr/learn/courses/30/lessons/138477

function solution(k, score) {
  let answer = [];
  let fame = [];
  for (let val of score) {
    if (fame.length < k) {
      fame.push(val);
      answer.push(Math.min(...fame));
    }
    // fame.length === k
    else if (val <= Math.min(...fame)) {
      answer.push(Math.min(...fame));
    }

    else if (val > Math.min(...fame)) {
      fame = fame.sort((a,b) => b - a); // 내림차순 정렬
      fame.pop(); // 마지막 원소 제거
      fame.push(val); // 최근 원소 추가
      answer.push(Math.min(...fame)); // 최소 원소 추가
    }
    console.log(val, fame.sort((a,b) => b - a));
  }

  return answer;
}


const arr = [0, 300, 40, 300, 20, 70, 150, 50, 500, 1000];
console.log(solution(4, arr))



// 다른사람 풀이
// function solution(k, score) {
//   const stack = []
//   return score.reduce((a,c) => {
//       if(stack.length < k) {
//           stack.push(c)
//           stack.sort((a,b) => a - b)
//       }
//       else {
//           stack.push(c)
//           stack.sort((a,b) => a - b)
//           stack.shift()
//       }
//       a.push(stack[0])
//       return a
//   },[])
// }