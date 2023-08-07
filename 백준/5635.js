var input = require("fs")
    .readFileSync("./백준/input.txt")
    .toString()
    .trim()
    .split("\n");

var n = Number(input.shift());
var arr = input.map((v) => {
    var [n, d, m, y] = v.split(" ");
    return [+y, +m, +d, n];
});
arr.sort((a, b) => {
    if (a[0] === b[0]) {
        return a[1] - b[1];
    } else if (a[1] === b[1]) {
        return a[2] - b[2];
    } else {
        return a[0] - b[0];
    }
});

console.log(arr[n - 1][3]);
console.log(arr[0][3]);
