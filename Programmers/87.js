// https://school.programmers.co.kr/learn/courses/30/lessons/87390

function solution(n, left, right) {
  var answer = [];
  
  let quotientL = Math.floor((left)/n)+1;
  let quotientR = Math.floor((right)/n)+1;

  for( let c = quotientL; c <= quotientR; c++) {
    if (c === quotientL && c !== quotientR) {
      let r = left%n + 1;
      while (r <= c) {
        answer.push(c);
        console.log('1-1:', c);
        r++;
      }
      while (r <= n) {
        answer.push(r);
        console.log('1-2:', r);
        r++;
      }
    } else if (c !== quotientL && c !== quotientR) {
      let r = 1;
      while(r <= c) {
        answer.push(c);
        console.log('2-1:', c);
        r++;
      }
      while(r <= n){
        answer.push(r);
        console.log('2-2:', r);
        r++;
      }
    } else if (c !== quotientL && c === quotientR) {
      let r = 1;
      while(r <= c) {
        answer.push(c);
        console.log('3-1:', c, r);
        if (r === right%n+1) {
          return answer;
          break
        }
        r++;
      }
      while(r <= n){
        answer.push(r);
        console.log('3-2:', r);
        if (r === right%n+1) {
          return answer;
          break
        }
        r++;
      }
    } else {
      let r = left%n + 1;
      while (r <= c) {
        answer.push(c);
        console.log('4-1:', c, r);
        if (r === right%n+1) {
          return answer;
          break
        }
        r++;
      }
      while(r <= n){
        answer.push(r);
        console.log('4-2:', r);
        if (r === right%n+1) {
          return answer;
          break
        }
        r++;
      }
    }
  }
  return answer;
}

// 다른 사람 풀이
function solution(n, left, right) {
  var answer = [];

  for (let i = left; i <= right; i++) {
      answer.push(Math.max(i % n, parseInt(i / n)) + 1)
  }

  return answer;
}

const [n, left, right] = [4,3,3]
console.log(solution(n, left, right))