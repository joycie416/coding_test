// https://school.programmers.co.kr/learn/courses/30/lessons/155651

function solution(book_time) {
  const answer = [];

  // 단위 바꾸기 (분), 시간 순 정렬
  const books = book_time
    .map(([start, end]) => {
      const startMin = hourToMin(start)
      const endMin = hourToMin(end, 10);
      return [startMin, endMin];
    })
    .sort((a, b) => {
      if (a[0] === b[0]) return a[1] - b[1];
      return a[0] - b[0];
    });
  
  answer.push(books[0])
  const len = book_time.length
  for (let i = 1; i < len; i++) {
    let booked = false
    for (const room in answer) {
      if (answer[room][1] <= books[i][0]) {
        answer[room] = books[i]
        booked = true;
        break
      }
    }
    if (!booked) {
      answer.push(books[i]);
    }
  }
  

  console.log(answer);

  return answer.length;
}

const hourToMin = (time, add = 0) => {
  const [hour, min] = time.split(':').map(Number)
  return hour*60 + min + add;
}

const book = [
  ["15:00", "17:00"],
  ["18:20", "21:20"],
  ["16:40", "18:20"],
  ["14:20", "15:20"],
  ["14:10", "19:20"],
];
console.log(solution(book));
