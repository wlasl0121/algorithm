let input = require("fs")
    .readFileSync("./백준/input.txt")
    .toString()
    .trim()
    .split("\n");

let N = Number(input.shift());
let arr = new Array(N).fill().map((_, i) => i + 1);
console.log(arr.join("\n"));
