let input = require("fs")
    .readFileSync("./백준/input.txt")
    .toString()
    .trim()
    .split("\n");

let str = input.shift().toUpperCase();

let result = new Array(26).fill(0);

for (let i = 0; i < str.length; i++) {
    result[str.charCodeAt(i) - 65]++;
}
let max = Math.max.apply(null, result);
let cnt = result.filter((e) => max === e).length;
console.log(cnt > 1 ? "?" : String.fromCharCode(result.indexOf(max) + 65));
