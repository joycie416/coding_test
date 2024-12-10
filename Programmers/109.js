// https://school.programmers.co.kr/learn/courses/30/lessons/178870

// function solution(sequence, k) {
//   const len = sequence.length;
//   let [start, end] = [0, 0];
//   let [tmpStart, tmpEnd] = [0, 0];
//   let minLength = 0;
//   let subSum = sequence[0];
//   let cnt = 0;

//   while (tmpStart !== len - 1) {
//     console.log(subSum, k, [tmpStart, tmpEnd]);
//     if (subSum < k) {
//       while (subSum < k) {
//         if (tmpEnd === len - 1) {
//           subSum -= sequence[tmpStart];
//           tmpStart++;
//           if (tmpStart === tmpEnd && tmpEnd === len - 1) {
//             if (subSum === k && minLength > 1) {
//               return [tmpStart, tmpEnd];
//             }
//             break;
//           }
//         } else {
//           tmpEnd++;
//           subSum += sequence[tmpEnd];
//         }
//       }
//       if (tmpStart === 0 && tmpEnd === len - 1 && subSum === k) {
//         return [0, len - 1];
//       }
//     } else if (subSum > k) {
//       while (subSum > k) {
//         subSum -= sequence[tmpStart];
//         tmpStart++;
//         if (tmpStart === tmpEnd && tmpEnd === len - 1) {
//           if (subSum === k && minLength > 1) {
//             return [tmpStart, tmpEnd];
//           }
//           break;
//         }
//       }
//     } else {
//       if (tmpEnd - tmpStart + 1 < minLength || minLength === 0) {
//         [start, end] = [tmpStart, tmpEnd];
//         minLength = tmpEnd - tmpStart + 1;
//       } else if (tmpEnd - tmpStart + 1 === minLength && tmpStart < start) {
//         [start, end] = [tmpStart, tmpEnd];
//       }
//       if (tmpEnd < len - 1) {
//         console.log(1);
//         tmpEnd++;
//         subSum += sequence[tmpEnd];
//       } else if (tmpStart < tmpEnd) {
//         console.log(2);
//         subSum -= sequence[tmpStart];
//         tmpStart++;

//         if (tmpStart === tmpEnd && tmpEnd === len - 1) {
//           if (subSum === k && minLength > 1) {
//             return [tmpStart, tmpEnd];
//           }
//           break;
//         }
//       }
//     }
//     cnt++;
//     console.log([tmpStart, tmpEnd]);
//     console.log();
//   }

//   return [start, end];
// }

function solution(sequence, k) {
  const len = sequence.length;
  let [start, end] = [0, 0];
  let [tmpStart, tmpEnd] = [0, 0];
  let minLength = 0;
  let subSum = sequence[0];

  while (tmpStart !== len - 1) {
    console.log(subSum, k, [tmpStart, tmpEnd]);
    if (subSum < k && tmpEnd < len - 1) {
      while (subSum < k && tmpEnd < len - 1) {
        tmpEnd++;
        subSum += sequence[tmpEnd];
      }
      if (subSum === k && tmpStart === 0 && tmpEnd === len - 1) {
        return [tmpStart, tmpEnd];
      }
    } else if (subSum > k) {
      while (subSum > k) {
        subSum -= sequence[tmpStart];
        tmpStart = tmpStart === len - 1 ? len - 1 : tmpStart + 1;
        if (tmpStart === tmpEnd && tmpEnd === len - 1) {
          if (subSum === k && (minLength > 1 || minLength === 0)) {
            return [tmpStart, tmpEnd];
          }
          break;
        }
      }
    } else if (subSum < k && tmpEnd === len - 1) {
      break;
    } else {
      if (tmpEnd - tmpStart + 1 < minLength || minLength === 0) {
        [start, end] = [tmpStart, tmpEnd];
        minLength = tmpEnd - tmpStart + 1;
      } else if (tmpEnd - tmpStart + 1 === minLength && tmpStart < start) {
        [start, end] = [tmpStart, tmpEnd];
      }
      if (tmpEnd < len - 1) {
        tmpEnd++;
        subSum += sequence[tmpEnd];
      } else if (tmpStart < tmpEnd) {
        subSum -= sequence[tmpStart];
        tmpStart++;
      }
    }
    console.log([tmpStart, tmpEnd]);
    console.log();
  }

  return [start, end];
}

// 다른 사람 풀이
function solution(sequence, k) {
  var answer = [0, sequence.length -1];
  let left = 0;
  let right = 0;

  let sum = sequence[left];
  while ( right < sequence.length) {
      if (sum > k) {
          sum -= sequence[left]
          left ++
      } else if (sum < k) {
          right ++
          sum += sequence[right]
      } else {
          let distance = answer[1] - answer[0]
          let currentDistance = right - left
          if (distance > currentDistance) {
              answer = [left, right]
          }
          sum -= sequence[left]
          left ++
      }
  }

  return answer;
}

const seq = [1, 1, 1, 5, 10];
const k = 10;
console.log("result :", solution(seq, k));
