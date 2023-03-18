let input = require("fs")
    .readFileSync("./백준/input.txt")
    .toString()
    .trim()
    .split("\n");
let [A, B, V] = input
    .shift()
    .split(" ")
    .map((v) => Number(v));

console.log(Math.ceil((V - B) / (A - B)));
