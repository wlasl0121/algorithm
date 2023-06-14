let input = require("fs")
    .readFileSync("./백준/input.txt")
    .toString()
    .trim()
    .split("\n");

let maxLength = Math.max(...input.map((v) => v.length));

let str = "";

for (let i = 0; i < maxLength; i++) {
    for (let j = 0; j < input.length; j++) {
        str += input[j][i] || "";
    }
}
console.log(str);
