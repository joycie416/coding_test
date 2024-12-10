function solution(s) {
  splited = s.toUpperCase().split(' ').map(str => [...str]);

  splited.forEach((string,index) => {
    string.forEach((str, idx) => {
      if (idx % 2 === 1) {
        string[idx] = str.toLowerCase();
      }
    });
    string = string.join('');
    splited[index] = string;
  });
  console.log(splited);
  return splited.join(' ');
};

console.log(solution("try hello world"))