// https://school.programmers.co.kr/learn/courses/30/lessons/42840

const one = [1,2,3,4,5];
const two = [2,1,2,3,2,4,2,5];
const three = [3,3,1,1,2,2,4,4,5,5];

function solution(answers) {
    var answer = [0,0,0];
    
    let i = 0, j = 0, k = 0; // one, two, three idx
    answers.forEach((ans, idx) => {
        console.log(i, j, k);
        if (ans === one[i]) {
            answer[0] += 1;
        }
        if (ans === two[j]) {
            answer[1] += 1;
        }
        if (ans === three[k]) {
            answer[2] += 1;
        }
        i++; j++; k++;
        i %= one.length;
        j %= two.length;
        k %= three.length;
    })
    console.log(answer);

    const max = Math.max(...answer);
    answer = answer.map((cnt, idx) => {
        if (cnt === max) {
            return idx+1;
        } else {
            return -1
        }
    })
    
    answer = answer.filter((idx) => idx>0)
    
    return answer;
}

console.log(solution([1,3,2,4,2]))