let input = require("fs")
    .readFileSync("./백준/input.txt")
    .toString()
    .trim()
    .split("\n");

let [H, M] = input
    .shift()
    .split(" ")
    .map((v) => Number(v));

let m = 0;
let h = 0;
if (M - 45 < 0) {
    m = 60 + (M - 45);
    if (H - 1 < 0) {
        h = 23;
    } else {
        h = H - 1;
    }
} else {
    m = M - 45;
    h = H;
}
console.log(h, m);
