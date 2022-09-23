function solution(left, right) {
    var answer = 0;

    for (var i = left; i <= right; i++) {
        var count = 0;
        for (var j = 1; j <= i; j++) {
            if (i % j === 0) {
                count++;
            }
        }
        if (count % 2 === 0) {
            answer += i;
        } else {
            answer -= i;
        }
    }

    return answer;
}

console.log(solution(13, 17));
console.log(solution(24, 27));
