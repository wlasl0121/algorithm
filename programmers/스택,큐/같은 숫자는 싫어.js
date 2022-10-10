function solution(arr) {
    var answer = [];

    var tmp = -1;
    arr.map(function (num) {
        if (num !== tmp) {
            tmp = num;
            answer.push(num);
        }
    });

    return answer;
}

console.log(solution([1, 1, 3, 3, 0, 1, 1]));
console.log(solution([4, 4, 4, 3, 3]));
