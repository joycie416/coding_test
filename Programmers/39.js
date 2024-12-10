function solution(num1, num2) {
  const gcd = (a, b) => a % b === 0 ? b : gcd(b, a % b); // 유클리드 호제법
  const lcm = (a, b) => a * b / gcd(a, b);
  return [gcd(num1, num2), lcm(num1, num2)];
}

function solution1(n,m) { // 이건 왜 안되지?
  let min = Math.min(n,m), max = Math.max(n,m);
  let gcd = 1;
  let i = 2;

  while (min > 1) {
    
    while (min%i === 0 && max%i === 0) {
      min /= i;
      max /= i;
      gcd *= i;
      console.log('stage 1 :', i, gcd,'||', min, max);
    }
    
    while (min%i === 0) {
      console.log('stage 2', min);
      min /= i;
    }
    console.log(min);
    i++;
    console.log(i, '===========');
    // if (min === 1) {
    //   console.log('min :', min);
    //   break;
    // }

  }  

  return [gcd, n*m/gcd];
}

console.log(solution(72, 72));





function solution0(n,m) {
  let min = factorize(Math.min(n,m)), max = factorize(Math.max(n,m));
  let gcd = 1;

  console.log(min, max);

  for(let factor in min) {
    if (max[factor]){
      console.log('gcd', factor);
      gcd *= Number(factor)**Math.min(min[factor], max[factor]);
    }
  }

  let lcm = n*m/gcd;
  
  
  
  return [gcd, lcm];
}

function factorize(n) {
  const factors = {};
  let i = 2;
  let cnt = 0;
  while (n > 1){
    if (n%i === 0) {
      n /= i;
      cnt++;
      // if (n === 1){
      //   factors.push([i, cnt]);
      //   break;
      // }
    }else{
      if (cnt !== 0) {
        factors[i] = cnt;
      }
      i++;
      cnt = 0;
    }
    console.log(n, i);
  }
  factors[i] = cnt;

  return factors;
}



