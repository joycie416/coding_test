// https://school.programmers.co.kr/learn/courses/30/lessons/161990

function solution(wallpaper) {
  const lux = wallpaper.findIndex((row) => row.includes("#"));
  const rdx = wallpaper.findLastIndex((row) => row.includes("#")) + 1;
  let luy = wallpaper[0].length;
  let rdy = 0;

  wallpaper.forEach((row) => {
    luy = Math.min(luy, row.indexOf("#") < 0 ? luy : row.indexOf("#"));
    rdy = Math.max(rdy, row.lastIndexOf("#") < 0 ? rdy : row.lastIndexOf("#"));
  });

  return [lux, luy, rdx, rdy + 1];
}

function solution(wallpaper) {
  const lengthY = wallpaper[0].length;
  const lengthX = wallpaper.length;

  const lux = wallpaper.findIndex((row) => row.includes("#"));
  const rdx =
    lengthX - wallpaper.reverse().findIndex((row) => row.includes("#"));

  let luy = lengthY;
  let rdy = lengthY;
  wallpaper.forEach((row) => {
    luy = Math.min(luy, row.indexOf("#") < 0 ? luy : row.indexOf("#"));
    rdy = Math.min(
      rdy,
      row.indexOf("#") < 0 ? rdy : [...row].reverse().join("").indexOf("#")
    );
  });

  return [lux, luy, rdx, lengthY - rdy];
}

console.log(
  solution([
    "..........",
    ".....#....",
    "......##..",
    "...##.....",
    "....#.....",
  ])
);
