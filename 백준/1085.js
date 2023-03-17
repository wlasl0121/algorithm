let input = require("fs")
    .readFileSync("./백준/input.txt")
    .toString()
    .trim()
    .split("\n");

let [x, y, w, h] = input
    .shift()
    .split(" ")
    .map((v) => Number(v));

let line = [
    [0, 0, 0, w],
    [0, w, h, w],
    [0, 0, h, 0],
    [h, 0, h, w],
];

let min = 9999;
for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
        if (j % 2 === 1) {
            min = Math.min(min, Math.abs(line[i][j] - x));
        } else {
            min = Math.min(min, Math.abs(line[i][j] - y));
        }
    }
}
console.log(min);
