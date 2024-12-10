// https://school.programmers.co.kr/learn/courses/30/lessons/131128

function solution(X, Y) {
  const answer = [];

  const arrChecked = []; // 중복된 숫자 중 확인한 것 넣는 배열


  if (X.length > Y.length) {
    [X,Y] = [Y,X];
  }

  for(let str of X) {
    // 중복된 숫자이고 아직 확인하지 않은 숫자이면
    if (Y.includes(str) && !arrChecked.includes(str)) {
      arrChecked.push(str);
      answer.push(str.repeat(Math.min(count([...X], str), count([...Y], str))));
    }
  }

  if(arrChecked.length === 0) { // 중복된 숫자가 없으면 '-1'
    return '-1'
  } else if (arrChecked.length === 1 && arrChecked[0][0] === '0') { // 중복된 숫자가 0뿐이면 '0'
    return '0'
  }

  answer.sort((a,b) => { // 내림차순 정렬
    if (a < b) {
      return 1
    } else {
      return -1
    }
  });

  return answer.join('');
}

function count(arr, ele) {
  return arr.filter(arrEl => arrEl === ele).length;
}


console.log(solution('1012','12345'));