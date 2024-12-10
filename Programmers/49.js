function solution(numbers) {
  var answer = new Set();

  numbers = numbers.sort((a,b) => a-b);
  
  let n = numbers.length;

  for(let i = 0; i<n-1; i++) {
    for(let j = i+1; j <n; j++) {
      answer.add(numbers[i]+numbers[j])
    }
  }

  return [...answer].sort((a,b) => a-b);
}


console.log(solution([5,0,2,7]));