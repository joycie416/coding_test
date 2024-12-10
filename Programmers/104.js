// https://school.programmers.co.kr/learn/courses/30/lessons/42839

function solution(numbers) {
  const primes = [];

  const visited = Array.from({length: numbers.length}, () => false);

  function DFS (cur, lv) {
    // console.log(visited)

    for (let i = 0, l = numbers.length; i < l; i++) {
      if(!visited[i]) {
        visited[i] = true;
        const tmp = (cur + numbers[i])*1
        if (isPrime(tmp) && !primes.includes(tmp)) {
          // console.log(tmp)
          primes.push(tmp);
        }
        DFS(cur + numbers[i], lv+1)
        visited[i] = false;
      }
    }
    
  }

  DFS('', 0)

  return primes.length;
}

function isPrime(num) {
  if (num === 1 || num === 0) {
    return false;
  }
  const sqrt = Math.floor(Math.sqrt(num));
  for (let i = 2; i <= sqrt; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

const n = '011'
console.log(solution(n))