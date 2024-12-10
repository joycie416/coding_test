const Babbles = ['aya', 'ye', 'woo', 'ma'];
const ex = ['woo', "ayaye", "uuu", "yeye", "yemawoo", "ayaayaa"];
// const ex = ["aya", "yee", "u", "maa", 'ayaya'];


function solution (babbling) {
  let answer = 0;

  for (let i = 0, n = babbling.length; i < n; i++) {
    let tmp_word = babbling[i];
    let isTrue = true;

    for (let j = 0; j < 4; j++) {
      tmp_word = tmp_word.replaceAll(Babbles[j], ` ${Babbles[j]}`);
    }
    tmp_word = tmp_word.trim();
    console.log(tmp_word);

    const tmp_split = tmp_word.split(' ');

    if (!tmp_split.every((str) => Babbles.includes(str))) {
      console.log('here 0');

      isTrue = false;
      continue;
    }

    for(let k in tmp_split) {
      const str = tmp_split[k];
      if (str === tmp_split[k-1] || str == tmp_split[k+1]){
        // 연속되면 안됨
        console.log('here 1');

        isTrue = false;
        break;
      }
      // for(let idx in Babbles) {
      //   if (str.includes(Babbles[idx])) {
      //     if (str[Babbles[idx].length] === str.at(-1)) {
      //       console.log('here 2');

      //       isTrue = false;
      //       break;
      //     } else if (str.replace(Babbles[idx], '') !== '') {
      //       console.log('here 3');
            
      //       isTrue = false;
      //       break;
      //     }
      //   }
      // }

      // if (!isTrue) {
      //   break;
      // }
    }

    if (isTrue) {
      // console.log(babbling[i]);
      answer++;
    }
  }

  return answer;
}

console.log(solution(ex));