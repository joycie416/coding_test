const DAYS = {
  1: 31, 2: 29, 3: 31, 4: 30, 5: 31, 6: 30,
  7: 31, 8: 31, 9: 30, 10: 31, 11: 30, 12: 31
}
const WEEK = ['MON','TUE','WED','THU','FRI','SAT','SUN'];


function solution(a, b) {
  var answer = '';

  let days = -1;
  let month = 1;
  while (month < a) {
    days += DAYS[month];
    month++;
    console.log(days);
  }
  days += b;
  days %= 7;

  console.log(month, days);

  return WEEK[(WEEK.indexOf('FRI') + days)%7];
}

console.log(solution(5,24));

function getDayName(a,b){
  var tempDate = new Date(2016, a-1, b);
  console.log(tempDate.toString());

  return tempDate.toString().slice(0,3).toUpperCase();
}

console.log(getDayName(5,24));