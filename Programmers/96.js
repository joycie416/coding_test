// https://school.programmers.co.kr/learn/courses/30/lessons/92341

function solution(fees, records) {
  var answer = [];
  const cars = {};

  for (const record of records)  {
    const [t, car, str] = record.split(' ');
    if (!cars[car]) {
      cars[car] = [t];
    } else {
      cars[car].push(t);
    }
  }

  for(const [car, record] of Object.entries(cars)) {
    let t = 0;
    for (let i = 0, n = record.length; i < n; i += 2) {
      if(!record[i+1]) {
        t += calculateTime(record[i], '23:59')
      } else {
        t += calculateTime(record[i], record[i+1])
      }
    }
    answer.push({car, fee: calculateFee(t, fees)});
  }

  return answer.sort((a,b) => a.car - b.car).map(({fee}) => fee);
}

const calculateTime = (t1, t2) => {
  if (t1 === t2) {
    return 0;
  }
  const [h1,m1] = t1.split(':');
  const [h2,m2] = t2.split(':');

  if (h1 === h2) {
    return (m2 - m1);
  } else {
    const min1 = 60 * h1 + (+m1);
    const min2 = 60 * h2 + (+m2);
    return min2 - min1;
  }
}

const calculateFee = (min, fees) => {
  if (min <= fees[0]) {
    return fees[1];
  } else {
    return fees[1] + Math.ceil((min - fees[0])/fees[2])*fees[3];
  }
}


const f = [120, 0, 60, 591]
const r = ["16:00 3961 IN","16:00 0202 IN","18:00 3961 OUT","18:00 0202 OUT","23:58 3961 IN"]	
console.log(solution(f,r))