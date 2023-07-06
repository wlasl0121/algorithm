var input = require("fs")
    .readFileSync("./백준/input.txt")
    .toString()
    .trim()
    .split("\n");

var outArr = [];
var inArr = [];

input.map((v) => {
    var [a, b] = v.split(" ").map(Number);
    outArr.push(a);
    inArr.push(b);
});

var total = 0;
var max = 0;

for (var i = 0; i < 4; i++) {
    total -= outArr[i];
    total += inArr[i];

    max = total > max ? total : max;
}

console.log(max);
