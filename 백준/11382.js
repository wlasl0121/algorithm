let input = require("fs")
    .readFileSync("./백준/input.txt")
    .toString()
    .trim()
    .split("\n");

let sum = 0;
input
    .shift()
    .split(" ")
    .map((v) => (sum += Number(v)));
console.log(sum);
