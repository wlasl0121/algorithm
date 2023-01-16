var input = require("fs")
    .readFileSync("./백준/input.txt")
    .toString()
    .split("\n");

var N = Number(input[0]);

var dp = new Array(N + 1).fill(0);

for (var i = 2; i <= N; i++) {
    dp[i] = dp[i - 1] + 1;

    if (i % 2 === 0) {
        dp[i] = Math.min(dp[i], dp[i / 2] + 1);
    }
    if (i % 3 === 0) {
        dp[i] = Math.min(dp[i], dp[i / 3] + 1);
    }
}

console.log(dp[N]);

/**
 * TODO : 다시 풀어보기
 */
