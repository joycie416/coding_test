function solution(array, commands) {
  let answer = [];

  answer = commands.map((command) => {
    let [i,j,k] = command;
    if (i > j) {
      [i,j] = [j,i];
    }
    return array.slice(i-1, j).sort((a,b) => a-b)[k-1];
  })

  // for (let command of commands){
  //   let [i,j,k] = command;
  //   answer.push(array.slice(i-1, j).sort((a,b) => a-b)[k-1]);
  // }
  

  return answer;
}

console.log(solution([1, 5, 2, 6, 3, 7, 4],[[2, 5, 3], [4, 4, 1], [1, 8, 3]]))