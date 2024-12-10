function solution0(sizes) {
  let [width, height] = [1000,1000];
  let lengths = new Set();
  sizes.forEach(([w,h]) => {
    lengths.add(w);
    lengths.add(h);
  });
  lengths = Array(...lengths).sort((a,b) => a- b);
  const n = lengths.length;

  console.log(lengths);

  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      console.log('=====', lengths[i], lengths[j], '=====');
      let cnt = 0;
      sizes.forEach(([w,h],idx) => {

        // console.log(w,h);
        if ((w <= lengths[i] && h <= lengths[j]) || (h <= lengths[i] && w <= lengths[j])){
          cnt++;
          console.log(cnt);
        }else{
          console.log(w,h);
        }
        // if (w <= lengths[i] && h <= lengths[j]){
        //   cnt++;
        //   console.log(cnt);
        // }
        // else if (h <= lengths[i] && w <= lengths[j]){
        //   cnt++;
        //   console.log(cnt);
        // }
      });
      if (cnt === sizes.length && lengths[i]*lengths[j] < width*height) {
        return lengths[i]*lengths[j];
      }
    }

  }

  return width*height;
}

let arr = [[10, 7], [12, 3], [8, 15], [14, 7], [5, 15]];
// console.log(solution0(arr));



function solution(sizes) {
  let width = Math.max(...sizes.map(([w,h]) => Math.max(w,h)));
  let height = Math.max(...sizes.map(([w,h]) => Math.min(w,h)));

  return width*height;
}

console.log(solution(arr));