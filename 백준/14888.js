let input = require("fs")
    .readFileSync("./백준/input.txt")
    .toString()
    .trim()
    .split("\n");
let N = Number(input.shift());
let arr = input
    .shift()
    .split(" ")
    .map((v) => Number(v));
let oper = input
    .shift()
    .split(" ")
    .map((v) => Number(v));
//oper : + - * / 순서
// console.log(N, arr, oper);

let max = Number.MIN_SAFE_INTEGER;
let min = Number.MAX_SAFE_INTEGER;

dfs(0, arr[0], oper.slice());

function operlater(a, b, index) {
    if (index === 0) {
        return a + b;
    } else if (index === 1) {
        return a - b;
    } else if (index === 2) {
        return a * b;
    } else if (index === 3) {
        if (a < 0) {
            return -Math.floor(-a / b);
        } else {
            return Math.floor(a / b);
        }
    }
}

function dfs(index, result, copyOps) {
    if (index === N - 1) {
        max = Math.max(max, result);
        min = Math.min(min, result);
        return;
    }
    for (let i = 0; i < 4; i++) {
        if (copyOps[i] > 0) {
            copyOps[i]--;
            dfs(index + 1, operlater(result, arr[index + 1], i), copyOps);
            copyOps[i]++;
        }
    }
}
console.log(max ? max : 0);
console.log(min ? min : 0);
