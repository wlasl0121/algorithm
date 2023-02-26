let input = require("fs")
    .readFileSync("./백준/input.txt")
    .toString()
    .trim()
    .split("\n");

let N = Number(input.shift());

for (let i = 0; i < N; i++) {
    console.log(`${input[i][0]}${input[i][input[i].length - 1]}`);
}
