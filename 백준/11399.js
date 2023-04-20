let input = require("fs")
    .readFileSync("백준/input.txt")
    .toString()
    .trim()
    .split("\n");
let N = Number(input.shift());
let P = input
    .shift()
    .split(" ")
    .map((v) => Number(v));
P.sort((a, b) => {
    return a - b;
});

let total = 0;
for (let i = 0; i < N; i++) {
    let sum = 0;
    for (let j = 0; j <= i; j++) {
        sum += P[j];
    }
    total += sum;
}
console.log(total);
