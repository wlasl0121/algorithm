let input = require("fs")
    .readFileSync("./백준/input.txt")
    .toString()
    .trim()
    .split("\n");

let str = input.shift();
let i = Number(input.shift());
console.log(str[i - 1]);
