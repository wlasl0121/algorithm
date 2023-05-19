let input = require("fs")
    .readFileSync("./백준/input.txt")
    .toString()
    .split("\n");

let N = Number(input.shift());
let arr = input
    .shift()
    .split(" ")
    .map((v) => Number(v));

let dp = new Array(N).fill(0);
dp[0] = arr[0];

for (let i = 1; i < N; i++) {
    let sum = dp[i - 1] + arr[i];
    if (sum > arr[i]) {
        dp[i] = sum;
    } else {
        dp[i] = arr[i];
    }
}
console.log(Math.max.apply(null, dp));
