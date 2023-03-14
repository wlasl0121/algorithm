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

let max = Math.max.apply(null, arr);
let sum = 0;
arr.map((v) => {
    sum += (v / max) * 100;
});

console.log(
    (sum / N).toString().includes(".") ? sum / N : (sum / N).toFixed(1)
);
