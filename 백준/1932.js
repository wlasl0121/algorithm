let input = require("fs")
    .readFileSync("백준/input.txt")
    .toString()
    .trim()
    .split("\n");

let n = Number(input.shift());

let arr = input.map((v) => {
    return v.split(" ").map((v) => Number(v));
});
let dp = Array.from(new Array(n + 1), () => Array(n + 1).fill(0));
dp[1][1] = arr[0][0];

for (let i = 1; i < n; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        let [a, b] = [0];
        if (dp[i][j] > -1) a = dp[i][j];
        if (dp[i][j + 1] > -1) b = dp[i][j + 1];
        dp[i + 1][j + 1] = arr[i][j] + Math.max(a, b);
    }
}
console.log(Math.max.apply(null, dp[n]));
