let input = require("fs")
    .readFileSync("./백준/input.txt")
    .toString()
    .trim()
    .split("\n");

let n = Number(input.shift());
let sum = 0;
for (let i = 1; i <= n; i++) {
    sum += i;
}
console.log(sum);
