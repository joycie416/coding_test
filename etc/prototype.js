function Person(name, year) {
  this.name = name;
  this.year = year;
}

Person.prototype.getYear = function () {
  return this.year;
};
Person.prototype.species = "인간";

const kim = new Person("김철수", 2000);

console.dir(Person);
console.dir(kim);

console.log(Object.getPrototypeOf(kim).getYear()); // undefined
console.log(kim.getYear()); // 2000
console.dir(kim.species); // '인간'

console.log(Person.prototype.constructor === Person); // true
console.log(kim.__proto__.constructor === Person); // true
console.log(Object.getPrototypeOf(kim).constructor === Person); // true

// constructor 변경하기
function Animal() {}
Animal.prototype.species = "동물";

const animal = new Animal();
animal.constructor = Person;

console.log(animal.constructor); // [Function: Person]
console.log(animal instanceof Person); // false

const what = new animal.constructor("hi", 2024);
console.log(what); // Person {name: 'hi', year: 2024 }

// 메서드 오버라이딩, 같은 이름의 메서드
Person.prototype.getName = function () {
  return this.name;
};

kim.getName = function () {
  return "내 이름은 " + this.name;
};

console.log(kim.getName()); // '내 이름은 김철수'
console.log(kim.__proto__.getName.call(kim)); // '김철수'
console.log(Object.getPrototypeOf(kim).getName.call(kim)); // '김철수'

// prototype chain
function Numbers() {
  const args = Array.prototype.slice.call(arguments);
  for (let i = 0; i < args.length; i++) {
    this[i] = args[i];
  }
  this.length = args.length;
}
Numbers.prototype = [];

const nums = new Numbers(9, 7, 5, 3, 1);
console.log(nums); // Array { '0': 9, '1': 7, '2': 5, '3': 3, '4': 1, length: 5 }
console.log(nums.pop()); // 1
console.log(nums.slice(1, 5)); // [7,5,3]
