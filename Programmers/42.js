function solution(number) {
  let cnt = 0;
  for (let i = 0, n = number.length; i < n-2; i++) {
    for (let j = i+1; j < n-1; j++) {
      for (let k = j+1; k<n ; k++ ) {
        if (number[i] + number[j] + number[k] === 0) {
          cnt++;
        }
      }
    }
  }
  return cnt;
}