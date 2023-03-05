let input = require("fs")
    .readFileSync("./백준/input.txt")
    .toString()
    .trim()
    .split("\n");
let N = Number(input.shift());
let km = input
    .shift()
    .split(" ")
    .map((v) => BigInt(v));
let liter = input
    .shift()
    .split(" ")
    .map((v) => BigInt(v));

let min = BigInt(liter[0]);
let sum = BigInt(0);
for (let i = 0; i < N - 1; i++) {
    if (liter[i] <= min) {
        min = liter[i];
    }
    sum += min * km[i];
}
console.log(sum.toString());
