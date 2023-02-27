var input = require("fs")
    .readFileSync("./백준/input.txt")
    .toString()
    .trim()
    .split("\n");

var N = Number(input.shift());

for (let i = 1; i <= 9; i++) {
    console.log(`${N} * ${i} = ${N * i}`);
}
