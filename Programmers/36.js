function solution(s) {
  console.log(s.length);
  if (![4,6].includes(s.length)) {
      return false;
  }
  
  // let alphabets = 'abcdefghijklmnopqrstuvwxyz';
  // s = s.toLowerCase()
  
  let arr = s.split('');
  // console.log(arr);
  for (str of arr) {
      if (isNaN(str)) {
          console.log(str);
          return false;
      }
  }
  return true;
  
  // return !isNaN(s);
}

console.log(solution('1234'));