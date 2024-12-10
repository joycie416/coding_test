// https://school.programmers.co.kr/learn/courses/30/lessons/134240

function solution(food) {  
  const placed = food.map((num, idx) => {
    let tmp = Math.floor(num/2);
    if (tmp === 0) {
      return '';
    }else{
      return `${idx}`.repeat(tmp);
    }
  }).join('');
  
  return placed + '0' + [...placed].reverse().join('');
}

console.log(solution([1, 3, 4, 6]));