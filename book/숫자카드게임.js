function solution(N, M, arr) {
    // N : 행
    // M : 열

    var minArr = [];
    for (var i = 0; i < N; i++) {
        minArr.push(Math.min(...arr[i]));
    }

    return Math.max(...minArr);
}

console.log(
    solution(3, 3, [
        [3, 1, 2],
        [4, 1, 4],
        [2, 2, 2],
    ])
);

console.log(
    solution(2, 4, [
        [7, 3, 1, 8],
        [3, 3, 3, 4],
    ])
);
