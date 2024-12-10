function solution(s, n) {
  let upper = 'A'.charCodeAt();
  let lower = 'a'.charCodeAt();

  let answer = [];

  for (let str of [...s]) {
    if (str === ' ') {
      answer.push(32);
      continue;
    }
    let ascii = str.charCodeAt();

    if(ascii < lower) { // uppercase
      answer.push((ascii + n - upper) % 26 + upper);
    }else{ // lowercase
      answer.push((ascii + n - lower) % 26 + lower);
    }
  }

  return String.fromCharCode(...answer);
}

console.log(solution("a B z",4));