let input = require("fs")
    .readFileSync("./백준/input.txt")
    .toString()
    .split("\n");

let [n, m] = input
    .shift()
    .split(" ")
    .map((v) => Number(v));

let arr = [];
for (let i = 0; i < n; i++) {
    let num = input
        .shift()
        .split(" ")
        .map((v) => Number(v));
    arr.push(num);
}
let cnt = Number(input.shift());

let answer = [];
input.map((v) => {
    let [i, j, x, y] = v.split(" ").map((v) => Number(v));
    answer.push(sum(i, j, x, y));
});
console.log(answer.join("\n"));

function sum(i, j, x, y) {
    let sum = 0;
    for (let a = i - 1; a < x; a++) {
        for (let b = j - 1; b < y; b++) {
            sum += arr[a][b];
        }
    }

    return sum;
}
