// https://school.programmers.co.kr/learn/courses/30/lessons/172928

function solution(park, routes) {
  // var answer = [];

  const rows = park.length;
  const cols = park[0].length;

  let curPos = [0, 0];
  const obstacles = [];

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (park[r][c] === "S") {
        curPos = [r, c];
        break;
      }
      // else if (park[r][c] === "X") {
      //   obstacles.push([r, c]);
      // }
    }
  }
  console.log("0 :", curPos);

  for (let route of routes) {
    const [dir, steps] = route.split(" ").map((el) => (isNaN(+el) ? el : +el));
    const sign = ["N", "W"].includes(dir) ? -1 : 1;

    const [r, c] = curPos;
    if (["S", "N"].includes(dir)) {
      let forward = true;
      for (let i = sign; Math.abs(i) <= steps; i += sign) {
        if (!park[r + i]?.[c] || park[r + i][c] === "X") {
          forward = false;
          break;
        }
      }
      if (forward) {
        curPos = [r + sign * steps, c];
      }
      console.log("1 :", curPos);
    } else {
      let forward = true;
      for (let i = sign; Math.abs(i) <= steps; i += sign) {
        if ((park[r]?.[c + i] ?? "X") === "X") {
          console.log("break 2");
          forward = false;
          break;
        }
      }
      if (forward) {
        curPos = [r, c + sign * steps];
      }
      console.log("2 :", curPos);
    }
  }

  return curPos;
}

function solution(park, routes) {
  const dirs = { E: [0, 1], W: [0, -1], S: [1, 0], N: [-1, 0] };
  const rows = park.length;
  const cols = park[0].length;

  let curPos = [0, 0];

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (park[r][c] === "S") {
        curPos = [r, c];
        break;
      }
    }
  }

  routes.forEach((route) => {
    const [dir, steps] = route.split(" ").map((el) => (isNaN(+el) ? el : +el));
    let cnt = 1;
    while (cnt <= steps) {
      [nx, ny] = [
        curPos[0] + cnt * dirs[dir][0],
        curPos[1] + cnt * dirs[dir][1],
      ];
      if (!park[nx]?.[ny] || park[nx][ny] === "X") {
        break;
      }
      cnt++;
    }
    if (cnt == steps + 1) [x, y] = [nx, ny];
  });
  return [x, y];
}

const park = ["OOO", "OSO", "OOO", "OOO"];
const routes = ["N 2", "S 2"];
console.log(solution(park, routes));
// console.log(isNaN(+"1"));
