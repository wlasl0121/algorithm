let [a, b] = require("fs")
    .readFileSync("./백준/input.txt")
    .toString()
    .trim()
    .split(" ");
let arr = new Array().fill(0);
let idx = 0;
for (let i = 1; i <= Number(b); i++) {
    for (let j = 1; j <= i; j++) {
        arr[idx] = i;
        idx++;
    }
}
let answer = 0;
for (let i = Number(a) - 1; i < Number(b); i++) {
    answer += arr[i];
}
console.log(answer);
