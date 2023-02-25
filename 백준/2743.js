let input = require("fs")
    .readFileSync("./백준/input.txt")
    .toString()
    .trim()
    .split("\n");

console.log(input.shift().length);
