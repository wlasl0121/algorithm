let input = require("fs")
    .readFileSync("백준/input.txt")
    .toString()
    .trim()
    .split("\n");

let N = Number(input.shift());
let arr = [];

for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
        star(i, j, N);
    }
    arr.push("\n");
}
console.log(arr.join(""));

function star(i, j, n) {
    if (i % 3 === 1 && j % 3 === 1) {
        arr.push(" ");
    } else {
        if (n === 1) {
            arr.push("*");
        } else {
            star(parseInt(i / 3), parseInt(j / 3), parseInt(n / 3));
        }
    }
}
