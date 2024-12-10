A = {
  'name' : 'Cho',
  'address' : {
    'country' : 'Korea',
    'city' : 'Seoul',
  },
  'sns' : null,
};

B = {
  'sns' : 'instagram',
  'food': 'apple',
  'music':['abcd', '123']
};


let assigned = Object.assign(A, B);
console.log(A);
console.log(B);
console.log(assigned);

console.log('1 ======================');
A.name = 'kim';
console.log(A);
console.log(B);
console.log(assigned); // assigned도 바뀜

console.log('2 ======================');
assigned.sns = 'blog';
console.log(A); // A도 바뀜
console.log(B); // B는 안바뀜
console.log(assigned);

console.log('3 ======================');
B.sns = 'facebook';
console.log(A);
console.log(B); // B만 바뀜
console.log(assigned);

console.log('4 ======================');
B.food = 'pear'; // B만 바뀜
console.log(A);
console.log(B);
console.log(assigned);

console.log('5 ======================');
assigned.food = 'orange'; // A도 바뀜
console.log(A);
console.log(B); // B는 안바뀜
console.log(assigned);

console.log('6 ======================');
assigned.address.city = 'Incheon';
console.log(A); // A도 바뀜
// console.log(B);
console.log(assigned);

console.log('7 ======================');
B.music.push('098'); // 모두 다 바뀜
console.log(A); // A도 바뀜
console.log(B);
console.log(assigned);

console.log('8 ======================');
assigned.music.push('가'); // 모두 다 바뀜
console.log(A);
console.log(B);
console.log(assigned);

console.log('9 ======================');
B.music = ['가나다','라']; // B만 바뀜
console.log(A);
console.log(B);
console.log(assigned);

console.log(A === assigned);