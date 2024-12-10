// https://school.programmers.co.kr/learn/courses/30/lessons/154538
// https://gyyeom.tistory.com/135

function solution0(x, y, n) {
  let answer = null;

  const DFS = (xx, lv) => {
    if (xx < y) {
      // console.log("x 3 :", xx * 3);
      DFS(xx * 3, lv + 1);
      // console.log("x 2 :", xx * 2);
      DFS(xx * 2, lv + 1);
      // console.log(`+ ${n} :`, xx + n);
      DFS(xx + n, lv + 1);
    } else if (xx === y) {
      // console.log(xx, lv);
      answer = Math.min(answer, lv);
      return;
    } else {
      return;
    }
  };

  DFS(x, 0);

  return answer ?? -1;
}

function solution(x, y, n) {
  let answer = null;

  const toVisit = [[0,x]];
  let idx = 0;
  while (toVisit[idx]) {
    const [lv, X] = toVisit[idx];
    // console.log([lv, X])
    if(X === y) {
      answer = Math.min(answer??1000000, lv);
    }

    if (X*3 <= y) {
      toVisit.push([lv+1, X*3])
    }
    if (X*2 <= y) {
      toVisit.push([lv+1, X*2])
    }
    if (X+n <= y) {
      toVisit.push([lv+1, X+n])
    }
    idx++
    if(idx > 500) {
      toVisit.splice(idx)
      idx = 0;
    }
    // toVisit.concat([[lv+1, X * 3], [lv+1, X * 2], [lv+1, X + n]]);
  }

  return answer ?? -1;
}

// 다른 사람 코드
function solution(x, y, n) {
  const dp = new Array(y+1).fill(Infinity);
  dp[x] = 0;
  for(let i=x; i<=y; i++){
      dp[i+n] = Math.min(dp[i+n],dp[i]+1);
      dp[i*2] = Math.min(dp[i*2],dp[i]+1);
      dp[i*3] = Math.min(dp[i*3],dp[i]+1);
  }
  return dp[y]!==Infinity? dp[y] : -1;
}

const [x, y, n] = [10, 40, 5];
console.log(solution(x, y, n));
