let input = require("fs")
    .readFileSync("./백준/input.txt")
    .toString()
    .trim()
    .split("\n");
let N = Number(input.shift());
let arr = input.map((v) => {
    let arr = v.split(" ").map((v) => Number(v));
    return arr;
});

for (let i = 0; i < N; i++) {
    console.log(arr[i][0] + arr[i][1]);
}
