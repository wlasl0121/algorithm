function solution(numbers) {
    var answer = [];
    var arr = [];

    for (var i = 0; i < numbers.length; i++) {
        for (var j = 0; j < numbers.length; j++) {
            if (i === j) continue;
            arr.push(numbers[i] + numbers[j]);
        }
    }

    arr.sort((a, b) => {
        return a - b;
    });

    var set = new Set(arr);
    answer = [...set];

    return answer;
}

console.log(solution([2, 1, 3, 4, 1]));
console.log(solution([5, 0, 2, 7]));
