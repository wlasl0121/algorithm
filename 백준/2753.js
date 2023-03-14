let input = require("fs")
    .readFileSync("./백준/input.txt")
    .toString()
    .trim()
    .split("\n");

let year = Number(input.shift());

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log(1);
} else console.log(0);
