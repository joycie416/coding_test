function solution(n) {
  const ret = [];

  while (n > 0) {
    ret.unshift(n%3);
    
    n = Math.floor(n/3);
  }
  console.log(ret);
  return ret.reduce((sum,val,idx) => sum + val*3**idx);
}

console.log(solution(45));


console.log(parseInt([...(45).toString(3)].reverse().join(''),3));