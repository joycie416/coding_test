// https://school.programmers.co.kr/learn/courses/30/lessons/68936

function solution(arr) {
  const answer = [0, 0];

  function quarter(arr) {
    console.log("start :", arr);
    const total = arr.reduce(
      (acc, cur) => acc + cur.reduce((acc2, cur2) => acc2 + cur2),
      0
    );
    if (total === 0 || total === Math.pow(arr.length, 2)) {
      console.log("total:", total);
      answer[total === 0 ? 0 : 1]++;
    } else {
      if (Math.log2(arr.length) === 0) {
        console.log("end :", arr);
        answer[arr[0][0]]++;
      } else {
        let r = arr.length;
        let curR = 0;
        let curC = 0;

        let side = Math.floor(arr.length / 2);
        while (curR < r) {
          while (curC < r) {
            let count = 0;
            let tmpArr = arr.slice(curR, curR + side).reduce((newArr, cur) => {
              count += cur
                .slice(curC, curC + side)
                .reduce((acc, cur) => acc + cur);
              newArr.push(cur.slice(curC, curC + side));
              return newArr;
            }, []);

            // const count = tmpArr.reduce(
            //   (acc, cur) => acc + cur.reduce((acc2, cur2) => acc2 + cur2),
            //   0
            // );
            if (count === 0 || count === side * side) {
              console.log("count:", count);
              answer[count === 0 ? 0 : 1]++;
            } else {
              quarter(tmpArr);
            }
            curC += side;
          }
          curC = 0;
          curR += side;
        }
      }
    }
  }

  quarter(arr);

  return answer;
}

const arr = [
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 0],
];
console.log("result :", solution(arr));
