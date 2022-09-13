function solution(n) {
    var answer = 0;

    var length = n.toString().length;
    for (var i = 0; i < length; i++) {
        answer += Number(n.toString()[i]);
    }

    return answer;
}

console.log(solution(123));
console.log(solution(987));
