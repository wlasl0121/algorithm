function solution(numbers) {
    var answer = -1;
    var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    for (var i = 0; i < numbers.length; i++) {
        var index = arr.findIndex((e) => e === numbers[i]);
        if (index > -1) arr[index] = -1;
    }

    answer = arr.reduce((acc, cur) => {
        cur > -1 ? (acc += cur) : 0;
        return acc;
    }, 0);

    return answer;
}

console.log(solution([1, 2, 3, 4, 6, 7, 8, 0]));
console.log(solution([5, 8, 4, 0, 6, 7, 9]));
