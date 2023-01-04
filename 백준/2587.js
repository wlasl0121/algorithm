var input = require("fs")
    .readFileSync("./백준/input.txt")
    .toString()
    .trim()
    .split("\n");

var sum = 0;
var arr = input.map((value) => {
    sum += Number(value);
    return Number(value);
});

var sorting = arr.sort((a, b) => {
    return a - b;
});
console.log(sum / 5);
console.log(sorting[2]);
