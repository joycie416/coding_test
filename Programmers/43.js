function solution(t, p) {
  let lenP = p.length;
  // p = parseInt(p);
  let cnt = 0;

  for (let i = 0, lenT = t.length; i <= lenT - lenP; i++) {
    if (+(t.slice(i,i+lenP)) <= +p){
      cnt++;
    }
  }

  return cnt;
}

console.log(solution("500220839878", "7"));