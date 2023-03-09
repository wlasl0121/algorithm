let input = require("fs")
    .readFileSync("./백준/input.txt")
    .toString()
    .trim()
    .split("\n");

let N = Number(input.shift());

let str = input.shift().split("");
console.log(
    str.reduce((prev, cur, idx) => {
        return Number(prev) + Number(cur);
    }, 0)
);
