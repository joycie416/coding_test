// https://school.programmers.co.kr/learn/courses/30/lessons/42746

// function solution(numbers) {
//   numbers.sort((a, b) => {
//     let [tmpA, tmpB] = [a, b];
//     while (tmpA % 10 === 0 && tmpA !== 0) {
//       tmpA /= 10;
//     }
//     while (tmpB % 10 === 0 && tmpB !== 0) {
//       tmpB /= 10;
//     }
//     console.log(tmpA, tmpB);

//     if (tmpA === tmpB) {
//       console.log(tmpA, tmpB);
//       return b - a;
//     } else {
//       return a.toString().localeCompare(b.toString());
//     }
//   });
//   console.log(numbers.reverse().join(''));
//   const answer = numbers.reverse().join('');

//   if (answer[0] === '0') {
//     return '0'
//   }
//   return answer;
// }

// function solution(numbers) {
//   const tmp = numbers.map((num,i) => [num.toString().repeat(4).slice(0,4),i])
//   tmp.sort()
//   const answer = tmp.reverse().map(arr => numbers[arr[1]]).join('');
  
//   if (answer[0] === '0') {
//     return '0'
//   }
//   return answer;
// }

function solution(numbers) {
  let answer = numbers.map(v=>v+'')
                      .sort((a,b) => (b+a)*1 - (a+b)*1)
  // console.log(answer);
  answer = answer.join('');               

  return answer[0]==='0'?'0':answer;
}

const n = [3, 30, 34, 5, 9, 0];
console.log(solution(n));
