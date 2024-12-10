// https://school.programmers.co.kr/learn/courses/30/lessons/77885

function solution(numbers) {
  // const answer = [];

  const answer = numbers.map(number => {
    if (number % 4 < 3) {
      return number + 1;
    }
    const binary = "0" + number.toString(2);
    console.log(binary);
    let idx = 1;
    while (binary.slice(-(idx + 2), -idx) === "11") {
      idx++;
    }
    console.log(
      (number + Math.pow(2, idx)).toString(2),
      number + Math.pow(2, idx)
    );
    return number + Math.pow(2, idx);
  })

  return answer;
}

const n = [2, 7];
console.log(solution(n));

console.log("12345".slice(-3, -1));
