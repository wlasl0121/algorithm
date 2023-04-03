let input = require("fs")
    .readFileSync("./백준/input.txt")
    .toString()
    .trim()
    .split("\n");

let n = Number(input.shift());
let rgb = input.map((v) => {
    return v.split(" ").map((v) => Number(v));
});

for (let i = 1; i < n; i++) {
    rgb[i][0] = Math.min(rgb[i - 1][1], rgb[i - 1][2]) + rgb[i][0];
    rgb[i][1] = Math.min(rgb[i - 1][0], rgb[i - 1][2]) + rgb[i][1];
    rgb[i][2] = Math.min(rgb[i - 1][0], rgb[i - 1][1]) + rgb[i][2];
}
console.log(Math.min.apply(null, rgb[n - 1]));
