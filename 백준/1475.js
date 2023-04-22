let input = require("fs")
    .readFileSync("백준/input.txt")
    .toString()
    .trim()
    .split("\n");
let N = input.shift();
let arr = new Array(10).fill(0);

for (let i = 0; i < N.length; i++) {
    let num = Number(N[i]);
    arr[num] += 1;
}
let count = 0;
for (let i = 0; i < 10; i++) {
    if (i !== 6 && i !== 9) {
        count = Math.max(count, arr[i]);
    }
}
console.log(Math.max(Math.ceil((arr[6] + arr[9]) / 2), count));
