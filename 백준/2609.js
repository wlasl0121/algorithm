let input = require("fs")
    .readFileSync("./백준/input.txt")
    .toString()
    .trim()
    .split("\n");

let [N, M] = input
    .shift()
    .split(" ")
    .map((v) => Number(v));

let x = N;
let y = M;
let r = N % M;

while (r > 0) {
    x = y;
    y = r;
    r = x % y;
    if (r === 0) break;
}
console.log(y);
console.log((N * M) / y);
