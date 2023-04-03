let input = require("fs")
    .readFileSync("./백준/input.txt")
    .toString()
    .trim()
    .split("\n");

let [n, k] = input
    .shift()
    .split(" ")
    .map((v) => Number(v));
let m = Array.from(new Array(n + 1), () => Array(k + 1).fill(0));

for (let i = 1; i < n + 1; i++) {
    let [W, V] = input
        .shift()
        .split(" ")
        .map((v) => Number(v));

    for (let j = 1; j <= k; j++) {
        if (j - W >= 0) {
            m[i][j] = Math.max(m[i - 1][j - W] + V, m[i - 1][j]);
        } else {
            m[i][j] = m[i - 1][j];
        }
    }
}
console.log(m[n][k]);
