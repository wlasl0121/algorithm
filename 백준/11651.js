let input = require("fs")
    .readFileSync("./백준/input.txt")
    .toString()
    .trim()
    .split("\n");

let N = Number(input.shift());
// console.log(input);

let xy = [];
input.map((v) => {
    xy.push([parseInt(v.split(" ")[0]), parseInt(v.split(" ")[1])]);
});
// console.log(xy);
xy.sort((a, b) => {
    if (a[1] === b[1]) {
        return a[0] - b[0];
    } else {
        return a[1] - b[1];
    }
});
let answer = [];
xy.map((v) => {
    answer.push(`${v[0]} ${v[1]}`);
});
console.log(answer.join("\n"));
