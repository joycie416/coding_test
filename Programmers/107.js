// https://school.programmers.co.kr/learn/courses/30/lessons/42883

// function solution(number, k) {
//   let answer = number;
//   let count = 0;
//   let num = 0;
//   const len = number.length;

//   while (answer.length > len - k) {
//     let tmp = answer.split(num + "");
//     console.log('start :', tmp);
//     if (count + tmp.length - 1 < k) {
//       console.log(1)
//       count += tmp.length - 1;
//       tmp = tmp.join("");
//     } else {
//       console.log(2)
//       tmp = tmp.join("");
//       while (count < k) {
//         const idx = tmp.lastIndexOf(num);
//         tmp = tmp.slice(0, idx-1) + tmp.slice(idx + 1);
//         count++;
//       }
//     }
//     console.log('end :', tmp);
//     answer = tmp;
//     num++;
//   }
//   return answer;
// }

// function solution(number, k) {
//   const len = number.length;
//   let max = number;

//   while (max.length > len - k) {
//     let idx = 1;
//     let tmp = max;
//     max = max.slice(1)
//     console.log("max :", max);

//     const midLength = max.length;
//     console.log(midLength);
//     while (idx < midLength) {
//       if ((tmp.slice(0,idx)+tmp.slice(idx+1))*1 > max*1) {
//         max = tmp.slice(0,idx)+tmp.slice(idx+1);
//       }
//       idx++;
//     }
//     console.log("cur max :", max);
//   }

//   return max;
// }

// function solution(number, k) {
//   const len = number.length;
//   let max = number;

//   let idx = 0;
//   while (max.length > len - k) {
//     if (max[idx] < max[idx + 1]) {
//       // 오른쪽 숫자가 더 크면 현위치 불포함
//       max = max.slice(0, idx) + max.slice(idx + 1);
//       idx--;
//       if (idx === -1) {
//         idx = 0;
//       }
//     } else if (idx === max.length - 1 && max[idx - 1] > max[idx]) {
//       // 현재 맨 마지막 위치인데, 추가로 제거해야하며
//       // 현위치가 왼쪽보다 더 작으면 불포함
//       max = max.slice(0, idx) + max.slice(idx + 1);
//       idx = 0;
//     } else if (max[idx] === max[idx + 1]) {
//       // 현재와 오른쪽이 동일한 값이면
//       let [start, end] = [idx, idx + 1];
//       // 같은 값을 가지지 않을 때까지 진행
//       while (max[start] === max[end]) {
//         end++;
//       }

//       if (end === max.length && end - start >= k - (len - max.length)) {
//         // 맨 마지막까지 동일한 숫자이고, 반복되는 횟수가 제거야할 개수 이상이면
//         // 해당 개수만큼 뒤에서부터 제거
//         max = max.slice(0, end - (k - (len - max.length)));
//         idx = end - (k - (len - max.length)) - 1;
//       } else {
//         // 맨 마지막까지 동일한 숫자가 아니면 맨 마지막 위치로 이동
//         idx = (end - 1) % max.length;
//       }
//     } else {
//       // 해당되는 경우가 없으면 다음 인덱스로 이동
//       idx = (idx + 1) % max.length;
//     }
//   }

//   return max;
// }

function solution(number, k) {
  let count = 0;
  const stack = [number[0]];
  let lastIdx = number.length;

  let idx = 1;
  while (count < k) {
    console.log(stack.join(''))
    if (stack.at(-1) < number[idx]) {
      stack.pop();
      // if (stack.length === 0) {
      //   stack.push(number[idx]);
      //   idx++
      // }
      count++;
      console.log(1, idx, stack.join(""), number.slice(idx, lastIdx));
    // } else if (stack.at(-1) === number[idx] && idx !== lastIdx - 1) {
    //   stack.push(number[idx]);
    //   idx++;
    //   console.log(2, idx, stack.join(""), number.slice(idx, lastIdx));
    } else if (stack.at(-1) === number[idx] && idx === lastIdx - 1) {
      stack.pop();
      count++;
      console.log(3, idx, stack.join(""), number.slice(idx, lastIdx));
    } else if (stack.at(-1) > number[idx] && idx === lastIdx - 1) {
      count++;
      lastIdx--;
      idx--;
      stack.pop()
      console.log(4, idx, stack.join(""), number.slice(idx, lastIdx));
    } else {
      stack.push(number[idx]);
      idx++;
      console.log(5, idx, stack.join(""), number.slice(idx, lastIdx));
    }
  }

  return stack.join("") + number.slice(idx, lastIdx);
}

const num = "4177252841";
const k = 4;
console.log(solution(num, k));
