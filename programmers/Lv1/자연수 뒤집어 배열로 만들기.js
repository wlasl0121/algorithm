function solution(n) {
    var answer = [];

    for (var i = 0; i < n.toString().length; i++) {
        answer[i] = Number(n.toString()[i]);
    }
    answer = answer.reverse();

    return answer;
}

console.log(solution(12345));
