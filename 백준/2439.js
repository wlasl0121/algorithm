let input = require("fs")
    .readFileSync("./백준/input.txt")
    .toString()
    .trim()
    .split("\n");

let N = Number(input.shift());

let answer = Array.from(
    new Array(N).fill("").map((v) => new Array(N).fill("*"))
);
for (let i = 0; i < N; i++) {
    for (let j = 0; j < N - 1 - i; j++) {
        answer[i][j] = " ";
    }
}
console.log(answer.join("\n").replaceAll(",", ""));
