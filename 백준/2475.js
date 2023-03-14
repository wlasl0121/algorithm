let input = require("fs")
    .readFileSync("./백준/input.txt")
    .toString()
    .trim()
    .split("\n");

let arr = input
    .shift()
    .split(" ")
    .map((v) => Number(v));
let sum = 0;
arr.map((v) => {
    sum += Math.pow(v, 2);
});
console.log(sum % 10);
