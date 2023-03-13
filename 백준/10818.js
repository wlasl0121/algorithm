let input = require("fs")
    .readFileSync("./백준/input.txt")
    .toString()
    .trim()
    .split("\n");

let N = Number(input.shift());
let arr = input
    .shift()
    .split(" ")
    .map((v) => Number(v));

console.log(Math.min.apply(null, arr), Math.max.apply(null, arr));
