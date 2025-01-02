// https://school.programmers.co.kr/learn/courses/30/lessons/81302

const DIR = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

function solution(places) {
  const answer = [];

  places.forEach((place) => {
    answer.push(isOkay(place));
  });

  return answer;
}

function isValid(place) {
  return place[0] >= 0 && place[0] < 5 && place[1] >= 0 && place[1] < 5;
}

function isOkay(place) {
  for (let r = 0; r < 5; r++) {
    for (let c = 0; c < 5; c++) {
      if (place[r][c] === "P") {
        for (let i = 0; i < 4; i++) {
          const [nr, nc] = [r + DIR[i][0], c + DIR[i][1]];
          if (isValid([nr, nc])) {
            if (place[nr][nc] === "P") {
              // level 1
              // console.log("wrong 1:", [r, c], [nr, nc]);
              return 0;
            }
            if (place[nr][nc] === "X") continue;

            for (let j = 0; j < 4; j++) {
              // level 2
              const [nnr, nnc] = [nr + DIR[j][0], nc + DIR[j][1]];
              if (isValid([nnr, nnc]) && (nnr !== r || nnc !== c)) {
                // 좌표 중 하나만 달라도 다른 좌표임
                if (place[nnr][nnc] === "P") {
                  // console.log("wrong 2:", [r, c], [nnr, nnc]);
                  return 0;
                }
              }
            }
          }
        }
      }
    }
  }
  return 1;
}

const places = [
  // ["POOOP", "OXXOX", "OPXPX", "OOXOX", "POXXP"],
  // ["POOPX", "OXPXP", "PXXXO", "OXXXO", "OOOPP"],
  // ["PXOPO", "OXOXP", "OXPOX", "OXXOP", "PXPOX"],
  // ["OOOXX", "XOOOX", "OOOXX", "OXOOX", "OOOOO"],
  // ["PXPXP", "XPXPX", "PXPXP", "XPXPX", "PXPXP"],
  ["OOPOO", "OOOOO", "OOPOO", "OOOOO", "OOOOO"],
];
console.log(solution(places)); // [1, 0, 1, 1, 1]
