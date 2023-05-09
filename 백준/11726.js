let n = Number(require("fs").readFileSync("백준/input.txt").toString().trim());
let DP = new Array(n + 1).fill(0);
DP[1] = 1;
DP[2] = 2;

for (let i = 3; i <= n; i++) {
    DP[i] = (DP[i - 1] + DP[i - 2]) % 10007;
}

console.log(DP[n]);
