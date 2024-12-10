// https://school.programmers.co.kr/learn/courses/30/lessons/154540

const DIRECTIONS = [
  [0, 1],
  [1, 0],
  [-1, 0],
  [0, -1],
];

function solution(maps) {
  const [rows, cols] = [maps.length, maps[0].length];
  const visited = Array.from(Array(rows), () => Array(cols).fill(false));
  const answer = [];

  const DFS = (r, c) => {
    let count = Number(maps[r][c]);
    console.log([r, c], count);
    visited[r][c] = true;
    for (const direction of DIRECTIONS) {
      const [nextRow, nextCol] = [r + direction[0], c + direction[1]];
      if (
        isInside(nextRow, nextCol, rows, cols) &&
        maps[nextRow][nextCol] !== "X" &&
        !visited[nextRow][nextCol]
      ) {
        count += DFS(nextRow, nextCol);
      }
    }
    return count;
  };

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (maps[row][col] !== "X" && !visited[row][col]) {
        const count = DFS(row, col);
        answer.push(count);
      }
    }
  }

  if (answer.length === 0) {
    return [-1];
  }

  return answer.sort((a, b) => a - b);
}

const isInside = (curRow, curCol, rows, cols) => {
  return curRow >= 0 && curCol >= 0 && curRow < rows && curCol < cols;
};

const maps = ["XXX", "XXX", "XXX"];
console.log(solution(maps));

// function solution(maps) {
//   const answer = new Map();
//   const rows = maps.length;
//   const cols = maps[0].length;
//   const map = maps.map((row) => [...row]);
//   let count = 0;

//   for (let row = 0; row < rows; row++) {
//     for (let col = 0; col < cols; col++) {
//       if (maps[row][col] !== "X") {
//         if (count === 0) {
//           maps[row][col] = [map[row][col]*1, count];
//           count++;
//           continue;
//         }
//         for (const dir of DIRECTIONS) {
//           const neighborDir = [row + dir[0], col + dir[1]];
//           const neighbor = map[neighborDir[0]][neighborDir[1]]
//           if(!!neighbor !== 'X') {
//             map[row][col] = [map[row][col]*1 + map[neighbor[0]][neighbor[1]][0], map[neighbor[0]][neighbor[1]][1]];
//             map[row + dir[0]][col + dir[1]]
//           }
//         }
//       }
//     }
//   }
//   return answer;
// }
