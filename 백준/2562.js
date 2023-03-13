let input = require("fs")
    .readFileSync("./백준/input.txt")
    .toString()
    .trim()
    .split("\n");

let arr = input.map((v) => Number(v));

let max = Math.max.apply(null, arr);
console.log(max);
console.log(arr.indexOf(max) + 1);
