let input = require("fs")
    .readFileSync("./백준/input.txt")
    .toString()
    .trim()
    .split("\n");
let n = Number(input.shift());

let arr = input
    .shift()
    .split(" ")
    .map((v) => Number(v));

let dp = new Array(n).fill(1);

for (let i = 1; i < n; i++) {
    const val = [1];
    for (let j = 0; j < i; j++) {
        if (arr[i] > arr[j]) {
            val.push(dp[j] + 1);
        }
    }
    dp[i] = Math.max(...val);
}

console.log(Math.max(...dp));
