// https://school.programmers.co.kr/learn/courses/30/lessons/178871

// function solution(players, callings) {

//   for (const calling of callings) {
//     const curIdx = players.indexOf(calling);
//     players.splice(curIdx, 1);
//     players.splice(curIdx - 1, 0, calling);
//   }

//   return players;
// }

function solution(players, callings) {
  var answer = [];

  const ranking = {};
  players.forEach((player, idx) => {
    ranking[player] = idx;
    ranking[idx] = player;
  });

  for (const calling of callings) {
    // call된 사람의 등수
    const curRank = ranking[calling];
    // call된 사람의 앞 사람
    const front = ranking[curRank - 1];

    // 앞 사람 등수 +1
    ranking[front]++;
    // call된 사람 등수 -1
    ranking[calling]--;
    // ranking update
    ranking[curRank - 1] = calling;
    ranking[curRank] = front;
  }
  
  for(let i = 0, n = players.length; i < n; i++) {
    answer.push(ranking[i])
  }

  return answer;
}

// function solution(players, callings) {
//   var answer = [];

//   const callingObj = {};
//   for (const calling of callings) {
//     if (!callingObj[calling]) {
//       callingObj[calling] = callings.filter((ele) => ele === calling).length;
//     }
//   }
//   // console.log(callingObj);

//   let cnt = 0;
//   while (Object.values(callingObj).filter((ele) => ele > 0).length > 0 && cnt < 20) {
//   // while (Object.values(callingObj).filter((ele) => ele > 0).length > 0) {
//     for (const player in callingObj) {
//       const curIdx = players.indexOf(player);

//       if (curIdx - callingObj[player] >= 0) {
//         players.splice(curIdx, 1);
//         players.splice(curIdx - callingObj[player], 0, player);
//         callingObj[player] -= curIdx;
//         // console.log('1')
//       } else if (curIdx - callingObj[player] < 0 && callingObj[player]>0) {
//         callingObj[player] -= curIdx;
//         players.splice(curIdx, 1);
//         players.splice(0, 0, player);
//         // console.log('2')
//       }

//       console.log(callingObj)
//       // console.log(players)

//       cnt++;
//     }
//   }

//   return players;
// }

const players = ["mumu", "soe", "poe", "kai", "mine"];
const callings = ["kai", "kai", "mine", "mine"];
console.log(solution(players, callings));

// console.log(players.indexOf('soe'))

console.log(Object.values({ a: 1, b: 2, c: 4 }));
