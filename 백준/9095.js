var input = require("fs")
    .readFileSync("./백준/input.txt")
    .toString()
    .split("\n");
var T = Number(input.shift());
var n = input.map(Number);
var arr = [0, 1, 2, 4];
var answer = [];

for (var i = 4; i < 11; i++) {
    arr[i] = arr[i - 1] + arr[i - 2] + arr[i - 3];
}
for (var i = 0; i < T; i++) {
    answer.push(arr[n[i]]);
}
console.log(answer.join("\n"));

/**
 * 20분 고민
 * TODO : 다시 풀어보기
 */
