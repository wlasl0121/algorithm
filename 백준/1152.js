let input = require("fs")
    .readFileSync("./백준/input.txt")
    .toString()
    .trim()
    .split(" ");
console.log(input[0] === "" ? 0 : input.length);
