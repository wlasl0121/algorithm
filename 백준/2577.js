let input = require("fs")
    .readFileSync("./백준/input.txt")
    .toString()
    .trim()
    .split("\n");

let sum = 1;
input.map((v) => {
    sum *= Number(v);
});
let arr = new Array(10).fill(0);
sum.toString()
    .split("")
    .map((v) => {
        arr[v] = arr[v] + 1;
    });
console.log(arr.join("\n"));

require("fs").writeFileSync("./백준/output.txt", JSON.stringify(arr));
