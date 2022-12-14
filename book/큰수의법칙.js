function solution(N, M, K, arr) {
    // N : 배열 크기
    // M : 횟수
    // K : 연속해서 더해질수있는 수 -> 큰수의법칙

    arr.sort((a, b) => {
        //내림차순
        return b - a;
    });

    var sum = 0;
    var cnt = 1;

    for (var i = 0; i < M; i++) {
        sum += arr[0];
        cnt++;

        if (cnt > K) {
            sum += arr[1];
            cnt = 1;
            i++;
        }
    }

    return sum;
}

console.log(solution(5, 8, 3, [2, 4, 5, 4, 6]));
// 6 6 6 5 6 6 6 5
console.log(solution(5, 7, 2, [3, 4, 3, 4, 3]));
// 4 4 4 4 4 4 4
