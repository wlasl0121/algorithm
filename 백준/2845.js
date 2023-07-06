var input = require("fs")
    .readFileSync("./백준/input.txt")
    .toString()
    .trim()
    .split("\n");

var [cnt, m2] = input.shift().split(" ").map(Number);
var total = cnt * m2;
var answer = [];
input
    .shift()
    .split(" ")
    .map((v) => {
        answer.push((total - +v) * -1);
    });
console.log(answer.join(" "));
