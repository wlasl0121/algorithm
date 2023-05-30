let input = require("fs")
    .readFileSync("./백준/input.txt")
    .toString()
    .split(" ");

let arr = input.map((v) => Number(v));

arr.sort((a, b) => a - b);

console.log(arr[1]);
