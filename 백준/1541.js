let input = require("fs")
    .readFileSync("./백준/input.txt")
    .toString()
    .trim()
    .split("\n");

let arr = [];

input
    .shift()
    .split("-")
    .map((v) => {
        arr.push(v);
    });

let sumArr = arr.map((v) => {
    let sum = 0;
    v.split("+").map((v) => {
        sum += Number(v);
    });
    return sum;
});
let minus = sumArr[0];
sumArr.map((v, i) => {
    if (i !== 0) {
        minus -= v;
    }
});
console.log(minus);
