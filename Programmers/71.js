
// https://school.programmers.co.kr/learn/courses/30/lessons/150370

function solution(today, terms, privacies) {
  var answer = [];

  const termOjb = {};
  terms.forEach((term) => {
    termOjb[term.split(" ")[0]] = +term.split(" ")[1];
  });

  [todayYear, todayMonth, todayDay] = today.split(".").map((date) => +date);

  privacies.forEach((element, idx) => {
    const [date, term] = element.split(" ");
    console.log(date);

    let [year, month, day] = date.split(".").map((element) => +element);

    month += termOjb[term];
    while (month > 12) {
      month -= 12;
      year++;
    }

    if (year === todayYear) {
      if (month < todayMonth) {
        console.log("here 1");
        answer.push(idx + 1);
      } else if (month === todayMonth && day <= todayDay) {
        console.log("here 2");
        answer.push(idx + 1);
      }
    } else if (year < todayYear) {
      console.log("here 3");
      answer.push(idx + 1);
    }
  });

  return answer;
}

const today = "2020.01.01";
const t = ["Z 2", "D 5"];
const p = [
  "2019.01.01 D",
  "2019.11.15 Z",
  "2019.08.02 D",
  "2019.07.01 D",
  "2018.12.28 Z",
];

console.log(solution(today, t, p));
