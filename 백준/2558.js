let input = require("fs")
    .readFileSync("백준/input.txt")
    .toString()
    .trim()
    .split("\n");

let A = Number(input.shift());
let B = Number(input.shift());
console.log(A + B);
