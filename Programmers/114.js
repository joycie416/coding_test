// https://school.programmers.co.kr/learn/courses/30/lessons/12978

// function solution(N, road, K) {
//   const answer = new Set([]);

//   // 그래프 만들기
//   const graph = Array.from(Array(N + 1), () => []);
//   road.forEach(([x, y, k]) => {
//     const xIdx = graph[x].findIndex(([a,_]) => a === y)
//     if (xIdx === -1) graph[x].push([y, k]);
//     if (xIdx !== -1 && graph[x][xIdx][1] > k) graph[x][xIdx][1] = k;

//     const yIdx = graph[y].findIndex(([a,_]) => a === x)
//     if (yIdx === -1) graph[y].push([x, k]);
//     if (yIdx !== -1 && graph[y][yIdx][1] > k) graph[y][yIdx][1] = k;
//   });
//   // 각 노드와 연결된 길을 오름차순으로 정렬
//   graph.forEach((edge) => edge.sort((a, b) => a[1] - b[1]));
//   console.log(graph)

//   const visited = Array.from(Array(N + 1), () => false);

//   const dfs = (cur, time) => {
//     visited[cur] = true;
//     if (time <= K) answer.add(cur);

//     for (const [next, nextTime] of graph[cur]) {
//       if (!visited[next]) {
//         dfs(next, time + nextTime);
//       }
//     }
//     visited[cur] = false;
//   };

//   dfs(1,0)

//   return answer.size;
// }

const solution = (N, road, K) => {
  let answer = 0;
  const timeArray = Array(N + 1)
    .fill(null)
    .map(() => Array(N + 1).fill(Infinity));

  road.forEach(([x, y, k]) => {
    timeArray[x][y] = Math.min(timeArray[x][y], k);
    timeArray[y][x] = Math.min(timeArray[y][x], k);
  });

  // 자기 자신은 0으로 초기화
  for (let idx = 1; idx <=N; idx++) {
    timeArray[idx][idx] = 0;
  }

  // 플로이드 알고리즘
  for (let mid = 1; mid <= N; mid++) {
    for (let start = 1; start <= N; start++) {
      for (let end = 1; end <= N; end++) {
        timeArray[start][end] = Math.min(
          timeArray[start][end],
          timeArray[start][mid] + timeArray[mid][end]
        );
      }
    }
  }

  for (let idx = 1; idx <= N; idx++) {
    if (timeArray[1][idx] <= K) answer++;
  }

  return answer;
};

const [N, K] = [6, 4];
const road = [
  [1, 2, 1],
  [1, 3, 2],
  [2, 3, 2],
  [3, 4, 3],
  [3, 5, 2],
  [3, 5, 3],
  [5, 6, 1],
];
console.log(solution(N, road, K));
