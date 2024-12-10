
// 아래 결과와 같이 나오도록 아래 함수를 완성해 보세요.

function deepCopy(obj) {
	// 모든 depth 까지 재귀적으로 탐색하여 복사한 객체를 return 하세요.
	// if문과 typeof 키워드를 이용해 보세요.
	const clonedObj = {};
	for (const key in obj) {
		// 이 부분을 완성해 보세요. 
		if (typeof obj[key] === 'object') {
      let keys = Object.keys(obj[key]);

      // if (keys.length === keys.filter(ele => !isNaN(ele)).length) { // array or key가 숫자인 dict
      // if (isEqual(keys, keys.filter(ele => !isNaN(ele)))) { // array or key가 숫자인 dict
      if (Array.isArray(obj[key])) { //array
          // console.log('array', obj[key]);
        clonedObj[key] = Object.assign([], obj[key]);
      } else { // dict
        // console.log('dict', obj[key]);
        const subclone = deepCopy(obj[key]);
        clonedObj[key] = subclone;
      }


    }else{
      clonedObj[key] = obj[key];
    }
	}
	return clonedObj;
}

function isEqual(arr1, arr2) {
  return arr1.length === arr2.length && arr1.every((val, idx) => val === arr2[idx]);
}

// A = [1,2,3];
// B = ['3',2,1];
// console.log(Array.isArray(A));
// console.log(A.0);


const obj = {
  name: 'John',
  age: 30,
  address: {
    city: 'Seoul',
    country: 'South Korea',
		details: ['도로명주소', '지번주소']
  }
};

const deepCopied = deepCopy(obj);
// console.log(deepCopied);

console.log( obj === deepCopied ); // 출력 결과: false
console.log( obj.age === deepCopied.age) ; // 출력 결과: true
console.log( obj.address === deepCopied.address ); // 출력 결과: false
console.log( obj.address.city === deepCopied.address.city ); // 출력 결과: true
console.log( obj.address.details === deepCopied.address.details ); // 출력 결과: false


// // console.log(typeof (()=>{}))

// A = [4,5,7,8];
// B = {'a':1, 'b':2, 'c':3};
// for (let a in A){
//   console.log(a);
// }
// for (let b in B){
//   console.log(b);
// }

// C = [1,5,23];
// console.log(Object.keys(C).filter(ele => !isNaN(ele)));
// console.log(isNaN('d'));

// console.log(Object.assign([],A));