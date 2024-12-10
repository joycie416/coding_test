// https://school.programmers.co.kr/learn/courses/30/lessons/136798

function solution(number, limit, power) {
  let attackArr = [...Array(number)].map((_,i) => {
    return (getFactor(i+1)>limit) ? power : getFactor(i+1);
  })
  
  return attackArr.reduce((sum,cur) => sum + cur);
}


function getFactor (num) {
  if (num === 1) {
    return 1;
  }else if(num === 2 || num === 3){
    return 2;
  }else {
    console.log('num :', num)
    let answer = 2;
    let sqrt = Math.floor(Math.sqrt(num));
    for(let i = 2; i<=sqrt; i++) {
      console.log(i);
      if (num%i === 0) {
        console.log(999);
        answer += 2;
      }
    }
    if (num === sqrt**2) {
      answer--;
    }
    return answer;
  }
}

getFactor(10)
console.log(getFactor(6))
// console.log(solution(10,3,2));
