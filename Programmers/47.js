// my own solution
function solution(strings, n) {
  return strings.sort((a,b) => a[n].localeCompare(b[n])? a[n].localeCompare(b[n]) : a.localeCompare(b));
}

function solution0(strings, n) {
  return strings.sort((a,b) => {
    // console.log(a,b);
    if (a[n].localeCompare(b[n])) {
      // console.log(1);
      return a[n].localeCompare(b[n]);
    }else{
      // console.log(3);
      return a.localeCompare(b);
    }
  });
  // return strings;
}


// 내배캠 제공 sol

function solution(strings, n) {

  let ret = [];

  strings.forEach((str) => {
    ret.push([...str][n]+str);
  })

  ret.sort();
  ret.forEach((str, idx) => {
    ret[idx] = ret[idx].replace([...str][0],'');
  })

  return ret;
}


console.log(solution(["abce", "abcd", 'cey', "cdx"], 2));
console.log(solution(["sun", "bed", "car"], 1));