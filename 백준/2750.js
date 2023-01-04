var input = require("fs")
    .readFileSync("./백준/input.txt")
    .toString()
    .trim()
    .split("\n");

var n = Number(input[0]);
var arr = [];
input.reduce((_, cur) => {
    arr.push(Number(cur));
});

var sorting = arr.sort((a, b) => {
    return a - b;
});
for (var i = 0; i < n; i++) {
    console.log(sorting[i]);
}
