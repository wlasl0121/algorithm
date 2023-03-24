let input = require("fs")
    .readFileSync("./백준/input.txt")
    .toString()
    .trim()
    .split("\n");

let n = Number(input.shift());
console.log(n);
let cave = input.map((v) => v.split(" ").map((v) => Number(v)));
console.log(cave);

function setGraph(arr) {
    let x = [0, 1, 0, -1];
    let y = [-1, 0, 1, 0];

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {}
    }
}
