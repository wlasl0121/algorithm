let input = require("fs")
    .readFileSync("./백준/input.txt")
    .toString()
    .trim()
    .split("\n");

let [N, K] = input
    .shift()
    .split(" ")
    .map((v) => Number(v));

let queue = new Array(N).fill().map((_, i) => i + 1);
let answer = [];

while (queue.length > 0) {
    for (let i = 0; i < K - 1; i++) {
        queue.push(queue.shift());
    }
    answer.push(queue.shift());
}

console.log(`<${answer.toString().replaceAll(",", ", ")}>`);
