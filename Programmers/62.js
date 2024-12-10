// https://school.programmers.co.kr/learn/courses/30/lessons/133499

const Babbles = ['aya', 'ye', 'woo', 'ma'];

function solution(babbling) {
    var answer = 0;

    for(let i = 0, n = babbling.length; i < n; i++) {
      let tmp_split = [];
      let tmp_replace = '';
      for(let j = 0; j < 4; j++) {
        console.log('j :',j, Babbles[j]);
        if (babbling[i].includes(Babbles[j])) {
          tmp_replace = babbling[i].replaceAll(Babbles[j], ` ${Babbles[j]}`);
          console.log(tmp_replace);

          tmp_split = tmp_replace.split(' ');

          if(tmp_split[0] === '') {
            tmp_split.splice(0,1);
          }

          const l = Babbles[j].length;
          for(let k = 0, m = tmp_replace.length; k < m; k++) {
            if(tmp_split[k-1] === tmp_split[k]) {
              continue;
            }
            else if(tmp_split[k] === tmp_split[k+1]){
              continue;
            }

            if (tmp_split[k].includes(Babbles[j]) && tmp_split[k][l] !== Babbles[i].at(-1)) {
              let t = tmp_split[k];
              console.log('tmp_split[k] :', k, tmp_split[k]);
              answer++;
            }
          }
        }
        
      }
      // console.log(babbling[i]);
    }

    return answer;
}

console.log('1 =================');
// console.log(solution(['ayaye']));


function solution(babbling) {
    var answer = 0;

    for(let i = 0, n = babbling.length; i < n; i++) {
      console.log(`current ${i} : ${babbling[i]} =========`);
      let isTrue = true;
      let tmp_count = 0;

      for(let j = 0; j < 4; j++) {
        console.log('j :',j, Babbles[j]);
        if (babbling[i].includes(Babbles[j])) {
          tmp_count++;

          const tmp_replace = babbling[i].replaceAll(Babbles[j], ` ${Babbles[j]}`);
          // console.log(tmp_replace);

          const tmp_split = tmp_replace.split(' ');

          if(tmp_split[0] === '') {
            tmp_split.splice(0,1);
          }
          console.log('tmp_split :', tmp_split);

          const l = Babbles[j].length;
          for(let k = 0, m = tmp_split.length; k < m; k++) {
            if(tmp_split[k-1] === tmp_split[k]) {
              console.log('here 1');
              isTrue = false;
              break;
            }
            else if (tmp_split[k] === tmp_split[k+1]){
              console.log('here 2');
              console.log(k, tmp_split[k] , tmp_split[k+1])
              
              isTrue = false;
              break;
            }

            if (tmp_split[k].includes(Babbles[j]) && tmp_split[k][l] !== Babbles[j].at(-1)) {
              // console.log('tmp_split[k] :', k, tmp_split[k]);
              // answer++;
            } else {
              console.log('here 3');
              console.log('includes?',tmp_split[k].includes(Babbles[j]));
              console.log(tmp_split[k][l] !== Babbles[j].at(-1));

              // isTrue = false;
              break;
            }
          }
        }

        if (!isTrue) {
          break;
        }
      }
      if(tmp_count === 0) {
        console.log('here 4');
        isTrue = false;
      }

      if (isTrue) {
        console.log(babbling[i]);
        answer++;
      }
    }

    return answer;
}

console.log('2 =================');
console.log(solution(["ayaye", "uuu", "yeye", "yemawoo", "ayaayaa"]	));
// console.log(solution(["ayaye"]	));