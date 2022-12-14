function solution(N, K) {
    var n = N;
    var cnt = 0;

    while (1) {
        if (n % K === 0) {
            n = n / K;
        } else {
            n -= 1;
        }
        cnt++;

        if (n === 1) break;
    }

    return cnt;
}

console.log(solution(17, 4));
console.log(solution(25, 5));
