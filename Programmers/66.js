// https://school.programmers.co.kr/learn/courses/30/lessons/160586

function solution(keymap, targets) {
  let answer = [];
  let lengths = keymap.map(key => key.length);
  let LEN = keymap.length;
  for (const target of targets) {
    let count = 0;
    for (const str of target) {
      if(keymap.filter(key => key.includes(str)).length === 0) {
        // 만약 str을 포함하는 keymap의 원소가 없으면 count를 0으로 바꿔주고 break
        count = 0;
        break;
      }

      // str이 등장하는 가장 작은 idx를 찾아야함
      // str이 포함되는 경우 가장 작은 idx가 100보다 커질 수 없으므로 100으로 설정
      let minIdx = 100;
      for (let i = 0; i < LEN; i++) {
        if (keymap[i].indexOf(str) > -1) {
          minIdx = Math.min(keymap[i].indexOf(str), minIdx);
        }
      }
      count += (minIdx+1);
    }

    if (count === 0) {
      // keymap으로 만들 수 없는 경우
      answer.push(-1);
    } else {
      answer.push(count);
    }
  }

  return answer;
}


const keymap = ["AGZ", "BSSS"];
const targets = 	["ASA","BGZ"];
console.log(solution(keymap, targets));