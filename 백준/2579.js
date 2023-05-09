let input = require("fs")
    .readFileSync("백준/input.txt")
    .toString()
    .trim()
    .split("\n");

let n = Number(input.shift());
let score = input.map((v) => Number(v));
score.unshift(0);
let dp = new Array(n + 1).fill(0);

dp[1] = score[1];
dp[2] = dp[1] + score[2];
dp[3] = Math.max(score[1], score[2]) + score[3];

for (let i = 4; i <= n; i++) {
    dp[i] = Math.max(dp[i - 3] + score[i - 1] + score[i], dp[i - 2] + score[i]);
}
console.log(dp[n]);
