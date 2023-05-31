let [input] = require("fs")
    .readFileSync("./백준/input.txt")
    .toString()
    .split("\n");

let answer = [];

for (let i = 0; i < input.length; i += 10) {
    answer.push(input.slice(i, i + 10));
}
console.log(answer.join("\n"));
