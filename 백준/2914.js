let [a, i] = require("fs")
    .readFileSync("./백준/input.txt")
    .toString()
    .trim()
    .split(" ");
i = i - 1 + 0.000001;
console.log(Math.ceil(a * i));
