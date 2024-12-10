// https://school.programmers.co.kr/learn/courses/30/lessons/92334

function solution(id_list, report, k) {
  const answer = {};
  const call = {};
  const counts = {};
  id_list.forEach((person) => {
    call[person] = new Set();
    counts[person] = 0;
    answer[person] = 0;
  });

  // 중복된 신고는 1회만 인정
  report = Array.from(new Set(report));
  // 신고 기록
  report.forEach((str) => {
    const [reporter, person] = str.split(" ");
    if (!call[reporter].has(person)) {
      call[reporter].add(person);
      counts[person]++;
      // console.log(str);
    }
  });

  // 신고 내역 없으면 빈 Set으로 설정
  id_list.forEach((reporter) => {
    if (!call[reporter]) {
      call[reporter] = new Set();
    }
  });

  // 신고자의 신고 내역 중 기준 넘는 사람이 있으면 메일 받음.
  id_list.forEach((reporter) => {
    const people = Array.from(call[reporter]);
    people.forEach((person) => {
      if (counts[person] >= k) {
        answer[reporter]++;
        // console.log(reporter,person);
      }
    });
  });
  // console.log("answer :", answer);

  return Object.values(answer);
}

function solution(id_list, report, k) {
  let reports = [...new Set(report)].map(a=>{return a.split(' ')});
  let counts = new Map();
  for (const bad of reports){
      counts.set(bad[1],counts.get(bad[1])+1||1)
  }
  let good = new Map();
  for(const report of reports){
      if(counts.get(report[1])>=k){
          good.set(report[0],good.get(report[0])+1||1)
      }
  }
  let answer = id_list.map(a=>good.get(a)||0)
  return answer;
}

const ids = ["con", "ryan"]	;
const reports = ["ryan con", "ryan con", "ryan con", "ryan con"]	;
const k = 3;
console.log(solution(ids, reports, k));
