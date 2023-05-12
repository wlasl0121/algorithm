let [n, k] = require("fs")
    .readFileSync("백준/input.txt")
    .toString()
    .trim()
    .split(" ")
    .map((v) => Number(v));

let dp = Array.from(new Array(n + 1), () => Array(n + 1).fill(0));

console.log(binomial(n - 1, k - 1));

function binomial(n, k) {
    for (let i = 0; i <= n; i++) {
        for (let j = 0; j <= Math.min(k, i); j++) {
            if (i === j || j === 0) {
                dp[i][j] = 1;
            } else {
                dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j];
            }
        }
    }
    return dp[n][k];
}
