function solution(s) {
  let answer = s;

  const word = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  // const num = Array(10).map((_, idx) => idx);

  for (i = 0; i <10; i++) {
    console.log(i);
    while (answer.includes(word[i])) {
      answer = answer.replace(word[i], i);
    }
  }

  return parseInt(answer);
}

let str = 'one';
console.log(str.includes('two',2), str);

console.log(solution("2three45sixseven"));
