let input = require("fs")
    .readFileSync("./백준/input.txt")
    .toString()
    .trim()
    .split("\n");

let [a, b, c] = input
    .shift()
    .split(" ")
    .map((v) => Number(v));

console.log((a + b) % c);
console.log(((a % c) + (b % c)) % c);
console.log((a * b) % c);
console.log(((a % c) * (b % c)) % c);
