// https://school.programmers.co.kr/learn/courses/30/lessons/86971

// 참고: https://yuniverse-b.tistory.com/entry/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EC%A0%84%EB%A0%A5%EB%A7%9D%EC%9D%84-%EB%91%98%EB%A1%9C-%EB%82%98%EB%88%84%EA%B8%B0-javascript
function solution(n, wires) {
  let answer = n;

  // 트리 만들기
  const tree = Array.from(Array(n+1), () => []);
  wires.forEach(([x,y]) => {
    tree[x].push(y);
    tree[y].push(x);
  })

  for (let idx = 0; idx < n- 1; idx++) {
    // 트리 사본 만들어서 연결 끊기
    const duplicate = JSON.parse(JSON.stringify(tree));
    const [x,y] = wires[idx];
    duplicate[x] = duplicate[x].filter(node => node !== y)
    duplicate[y] = duplicate[y].filter(node => node !== x)

    const visited = Array.from(Array(n+1), () => false);
    // 번호가 작은 송전탑 기준으로 tree 순회하기
    const dfs = (cur) => {
      let count = 1;
      visited[cur] = true;
      console.log(visited)

      for (const neighbor of duplicate[cur]) {
        if (!visited[neighbor]) {
          count += dfs(neighbor);
        }
      }
      return count
    }
    console.log('--------------------')
    answer = Math.min(Math.abs(n - 2*dfs(x)), answer)
  }


  return answer;
}

const n = 9;
const wires = [[1,3],[2,3],[3,4],[4,5],[4,6],[4,7],[7,8],[7,9]]	
console.log(solution(n, wires));

// function solution(n, wires) {
//   let answer = n;
//   wires.sort((a, b) => a[0] - b[0]);
//   const duplicatedWires = wires.concat(wires);

//   let idx = 0;
//   while (idx < n - 1) {
//     const [first, second] = [
//       new Set([wires[idx][0]]),
//       new Set([wires[idx][1]]),
//     ];
//     console.log(idx, wires[idx]);
//     console.log(first, second);

//     duplicatedWires.slice(idx+1, idx + n).forEach((wire, i) => {
//       if (idx === i) return;

//       if (first.has(wire[0]) || first.has(wire[1])) {
//         first.add(wire[0]).add(wire[1]);
//         return;
//       }
//       second.add(wire[0]).add(wire[1]);
//       console.log(first, second)
//       return;
//     });

//     if (first.size === n - 1 || second.size === n - 1) {
//       answer = Math.min(n - 2, answer);
//       idx++;

//       console.log(answer, n - 2, first, second);
//       console.log("------------------");
//       continue;
//     }

//     answer = Math.min(Math.abs(n - 2 * first.size), answer);
//     idx++;

//     console.log(answer, Math.abs(n - 2 * first.size), first, second);
//     console.log("------------------");
//   }
//   return answer;
// }

// const getIntersection = (first, second) => {
//   const intersection = new Set();

//   first.forEach((node) => {
//     if (second.has(node)) {
//       intersection.add(node);
//     }
//   });

//   return intersection;
// };

// const isValid = (wire, first, second) => {
//   if (getIntersection(first, second).size > 0) {
//     return false;
//   }

//   const wireSet = new Set(wire);
//   const firstIntersection = getIntersection(first, wireSet);
//   const secondIntersection = getIntersection(second, wireSet);

//   if (
//     firstIntersection.size === 1 &&
//     secondIntersection.size === 1 &&
//     getIntersection(firstIntersection, secondIntersection).size === 0
//   ) {
//     return true;
//   }

//   if (firstIntersection.size === 0 && second.has(wire[0])) {
//     first.add(wire[1]);
//   }
//   if (firstIntersection.size === 0 && second.has(wire[1])) {
//     first.add(wire[0]);
//   }
//   if (secondIntersection.size === 0 && first.has(wire[0])) {
//     second.add(wire[1]);
//   }
//   if (secondIntersection.size === 0 && first.has(wire[1])) {
//     second.add(wire[0]);
//   }
//   return true;
// };
