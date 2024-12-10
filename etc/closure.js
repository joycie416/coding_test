const outer = () => {
  let a = 0;
  const inner = () => {
    return a++;
  };
  return inner;
};

const outer2 = outer();

console.log(outer2()); // 1
console.log(outer2()); // 2

const fruitBox = Array.from({ length: 3 }, () => ["apple", "banana", "melon"]);

fruitBox.forEach(function (fruits, idx) {
  fruits.forEach(function (_, innerIdx) {
    if (innerIdx === idx) {
      console.log(fruits[innerIdx]);
    }
  });
});

// const person = {
//   perStep: Math.ceil(Math.random()*10 + 20),
//   cm: 0,
//   moves: 0,
//   walk: function () {
//     const steps = Math.ceil(Math.random()*5)
//     this.cm += this.perStep*steps;
//     this.moves++
//   },
// };

// console.log(person)
// person.walk()
// console.log(person)

const createPerson = function () {
  const perStep = Math.ceil(Math.random() * 10 + 20);
  let cm = 0;
  let moves = 0;
  const walk = function () {
    const steps = Math.ceil(Math.random() * 5);
    cm += perStep * steps;
    moves++;
  };

  return Object.freeze({
    get cm() {
      return cm;
    },
    get moves() {
      return moves;
    },
    walk,
  });
};

const person = createPerson();

person.walk = function () {
  console.log("walk");
};

console.log(person.cm, person.moves);
person.walk();
console.log(person.cm, person.moves);

// 부분 적용 함수
const _ = Symbol.for("EMPTY_SPACE");

const partial = function () {
  const originalPartialArgs = arguments;
  const func = originalPartialArgs[0];
  if (typeof func !== "function") {
    throw new Error("첫 번째가 인자가 함수가 아님");
  }

  return function () {
    const partialArgs = Array.prototype.slice.call(originalPartialArgs, 1);
    const restArgs = Array.prototype.slice.call(arguments);

    for (let i = 0; i < partialArgs.length; i++) {
      if (partialArgs[i] === _) {
        partialArgs[i] = restArgs.shift();
      }
    }
    return func.apply(this, partialArgs.concat(restArgs));
  };
};

const add = function () {
  let result = 0;
  for (let i = 0; i < arguments.length; i++) {
    result += arguments[i];
  }
  return result;
};

const addPartial = partial(add, 1, 2, _, 4, 5, _, _, _, 9, 10);
console.log(addPartial(3, 6, 7, 8));
