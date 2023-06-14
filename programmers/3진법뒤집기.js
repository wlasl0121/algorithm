function solution(n) {
    var answer = 0;
    var change = n.toString(3).split("").reverse().join("");
    answer = parseInt(change, 3);
    return answer;
}

console.log(solution(45));
console.log(solution(125));
