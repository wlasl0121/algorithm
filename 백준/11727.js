let n = Number(require("fs").readFileSync("백준/input.txt").toString().trim());

let dp = new Array(n + 1).fill(0);
dp[1] = 1;
dp[2] = 3;

for (let i = 3; i <= n; i++) {
    dp[i] = (dp[i - 2] * 2 + dp[i - 1]) % 10007;
}
console.log(dp[n]);
