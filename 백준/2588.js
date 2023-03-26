let input = require("fs")
    .readFileSync("./백준/input.txt")
    .toString()
    .trim()
    .split("\n");

let [a, b] = input.map((v) => Number(v));
let bArr = b.toString().split("");

for (let i = 2; i >= 0; i--) {
    console.log(a * Number(bArr[i]));
}
console.log(a * b);
