var input = require("fs")
    .readFileSync("./백준/input.txt")
    .toString()
    .trim()
    .split("\n");

var n = +input;
var queue = Array.from(Array(n), (v, i) => i + 1);
var answer = [];
while (queue.length) {
    answer.push(queue.shift());
    if (queue.length === 0) break;
    queue.push(queue.shift());
}
console.log(answer.join(" "));
