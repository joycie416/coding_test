//https://school.programmers.co.kr/learn/courses/30/lessons/77484

function solution(lottos, win_nums) {
  lottos = lottos.sort((a,b) => a-b);
  win_nums = win_nums.sort((a,b) => a-b);

  const correctNums = win_nums.filter(num => lottos.includes(num)).length;
  const zeros = lottos.filter((num) => num === 0).length;

  if (zeros === 0) {

    return correctNums ? [7 - correctNums, 7 - correctNums] : [6, 6];
    // if (correctNums >= 1) {
    //   return [7 - correctNums, 7 -correctNums];
    // } else {
    //   return [6, 6];
    // }
    
  } else if (zeros === 6) {
    return [1,6];
  } else {
    return correctNums ? [7 - correctNums - zeros, 7 - correctNums] : [7 - correctNums - zeros, 6];
    // const tmp = correctNums ? correctNums : 1
    // return [7 - correctNums - zeros, 7 - tmp];
  }
}


let lottos = [45, 4, 35, 1, 3, 9];
let win_nums = [45, 4, 35, 20, 3, 9];
console.log(solution(lottos, win_nums));