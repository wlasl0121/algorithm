let input = require("fs")
    .readFileSync("백준/input.txt")
    .toString()
    .trim()
    .split("\n")
    .map((v) => Number(v));
let n = input.shift();
let dp = new Array(n + 1).fill(0);

dp[1] = input[0];
dp[2] = input[0] + input[1];

for (let i = 3; i <= n; i++) {
    dp[i] = Math.max(
        dp[i - 3] + input[i - 2] + input[i - 1],
        dp[i - 2] + input[i - 1],
        dp[i - 1]
    );
}

console.log(dp[n]);
