var input = require("fs")
    .readFileSync("./백준/input.txt")
    .toString()
    .trim()
    .split("\n");

var odd = [];
var sum = 0;
input.map((v) => {
    if (+v % 2 === 1) {
        odd.push(+v);
        sum += +v;
    }
});

odd.sort((a, b) => {
    return a - b;
});

if (odd.length > 0) {
    console.log(sum);
    console.log(odd[0]);
} else {
    console.log(-1);
}
