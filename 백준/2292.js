let input = require("fs")
    .readFileSync("./백준/input.txt")
    .toString()
    .trim()
    .split("\n");

let N = Number(input.shift());
let num = 1;

let i = 1;
while (num < N) {
    num += 6 * i;
    i++;
}
console.log(i);
