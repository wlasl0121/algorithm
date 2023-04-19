let input = require("fs")
    .readFileSync("백준/input.txt")
    .toString()
    .trim()
    .split("\n");

let [N, M] = input
    .shift()
    .split(" ")
    .map((v) => Number(v));

let nums = [];
let tmp = [];
let answer = [];
for (let i = 1; i <= N; i++) {
    nums.push(i);
}
backtrack();

console.log(answer.join("\n"));

function backtrack() {
    if (tmp.length === M) {
        answer.push(tmp.toString().replaceAll(",", " "));
        return;
    }
    for (let i = 0; i < N; i++) {
        if (tmp.length > 0 && tmp[tmp.length - 1] > nums[i]) continue;
        tmp.push(nums[i]);
        backtrack();
        tmp.pop();
    }
}
