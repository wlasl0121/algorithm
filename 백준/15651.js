let input = require("fs")
    .readFileSync("백준/input.txt")
    .toString()
    .trim()
    .split("\n");

let [N, M] = input
    .shift()
    .split(" ")
    .map((v) => Number(v));
// N : 1~N까지 M개를 고른 수열
let answer = [];
let nums = [];
let arr = [];
for (let i = 1; i <= N; i++) {
    nums.push(i);
}
backtrack();

console.log(answer.join("\n"));

function backtrack() {
    if (arr.length === M) {
        answer.push(arr.toString().replaceAll(",", " "));
        return;
    }
    for (let i = 0; i < N; i++) {
        arr.push(nums[i]);
        backtrack();
        arr.pop();
    }
}
