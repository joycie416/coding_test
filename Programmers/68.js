// https://school.programmers.co.kr/learn/courses/30/lessons/133502

function solution(ingredient) {
  // 다른 사람 풀이
  let answer = 0;
  const stack = [];
  
  for (let i = 0; i < ingredient.length; i++) {
      stack.push(ingredient[i]);
      
      if (stack.length >= 4) {
          const burger_ingredient = stack.slice(-4).join("");
          
          if (burger_ingredient === '1231') {
              stack.splice(-4);
              answer += 1;
          }
      }
  }
  
  return answer;
}

function solution0(ingredient) {
  var answer = 0;
  const burger = "1231";

  let stringIngredients = ingredient.map((ele) => ele.toString());

  let tmp = "";
  for (const str of stringIngredients) {
    tmp += str;
    // console.log(tmp.slice(tmp.length - 4));

    if (tmp.slice(tmp.length - 4) === burger) {
      // console.log(tmp.slice(tmp.length - 4));
      tmp = tmp.substring(0, tmp.length - 4);

      answer++;
    }
  }

  return answer;
}

const input = [1, 1, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1];
console.log(solution(input));

// console.log(stringIngredient);

// while (stringIngredient.includes(burger)) {
//   stringIngredient = stringIngredient.replace(burger, "");

//   answer++;

//   // stringIngredient = stringIngredient.replaceAll(burger, "x");
//   // console.log(stringIngredient);

//   // for (const str of [...stringIngredient]) {
//   //   if (str === "x") {
//   //     answer++;
//   //   }
//   // }
//   // stringIngredient = stringIngredient.replaceAll("x", "");

//   // answer++;
//   // console.log(stringIngredient)
// }

function solution1(ingredient) {
  var answer = 0;
  const burger = "1231";

  let stringIngredient = ingredient.join("");

  while (stringIngredient !== stringIngredient.replace(burger, "")) {
    stringIngredient = stringIngredient.replace(burger, "");

    answer++;
  }

  return answer;
}

console.log("1234".replace("0", "x"));
