var input = require("fs")
    .readFileSync("./백준/input.txt")
    .toString()
    .split("\n");

var N = Number(input[0]);

var f0 = 0;
var f1 = 1;
var fn = -1;

if (N === 0) {
    console.log(f0);
    return 0;
} else if (N === 1) {
    console.log(f1);
    return 0;
}
for (var i = 1; i < N; i++) {
    fn = f0 + f1;
    f0 = f1;
    f1 = fn;
}
console.log(fn);
