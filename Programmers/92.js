// https://school.programmers.co.kr/learn/courses/30/lessons/42587

function solution0(priorities, location) {
  let answer = 0;

  let myPriority = priorities[location];
  console.log("myPriority :", myPriority);
  let ceilingIdx = priorities.indexOf(Math.max(...priorities));
  let ceiling = priorities[ceilingIdx];
  const samePriority = [];

  for (let i = 0, n = priorities.length; i < n; i++) {
    if (priorities[i] > myPriority) {
      answer++;
      if (ceiling >= priorities[i]) {
        // && i > ceilingIdx
        // console.log(ceilingIdx, i, priorities[i]);
        ceilingIdx = i;
        ceiling = priorities[i];
      }
    } else if (priorities[i] === myPriority) {
      // if ( i >= location) {
      //   answer++;
      // }
      samePriority.push(i);
    }
  }

  console.log("my location :", location);
  console.log("ceiling, idx :", ceiling, ceilingIdx);
  console.log("same Priority :", samePriority);
  console.log("greater priority :", answer);

  for (const idx of samePriority) {
    if (location >= ceilingIdx) {
      if (idx <= location && idx >= ceilingIdx) {
        console.log("1 :", idx);
        answer++;
      }
    } else {
      if (idx <= location && idx < ceilingIdx) {
        console.log("2 :", idx);
        answer++;
      } else if (idx > ceilingIdx) {
        console.log("3 :", idx);
        answer++;
      }
    }
  }

  return answer;
}

function solution(priorities, location) {
  let answer = 0;
  while (priorities.length !== 0) {
    let temp = priorities[0];
    if (Math.max(...priorities) !== temp) {
      priorities.splice(0, 1);
      priorities.push(temp);
      location -= 1;
      if (location < 0) {
        location += priorities.length;
      }
    } else {
      console.log(temp);
      priorities.splice(0, 1);
      answer += 1;
      if (location === 0) {
        break;
      }
      location -= 1;
    }
  }
  return answer;
}

function solution(priorities, location) {
  var arr = priorities.map((priority, index) => {
      return {
          index: index, priority: priority
      };
  });

  var queue = [];

  while(arr.length > 0) {
      var firstEle = arr.shift();
      var hasHighPriority = arr.some(ele => ele.priority > firstEle.priority);
      if (hasHighPriority) {
          arr.push(firstEle);
      } else {
          queue.push(firstEle);
      }
  }

  return queue.findIndex(queueEle => queueEle.index === location) + 1;
}

const p = [2, 3, 3, 2, 9, 3, 3];
const l = 3;
console.log("answer :", solution(p, l));
