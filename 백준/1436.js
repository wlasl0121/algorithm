var input = require("fs")
    .readFileSync("./백준/input.txt")
    .toString()
    .trim()
    .split("\n");

var N = Number(input.shift());
var cnt = 0;
var str = "666";

var number = 665;
while (cnt <= N) {
    number++;
    if (number.toString().includes(str)) {
        cnt++;
    }
    if (cnt === N) break;
}
console.log(number);
