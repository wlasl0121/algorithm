let input = require("fs")
    .readFileSync("백준/input.txt")
    .toString()
    .trim()
    .split("\n");

let [N, M] = input
    .shift()
    .split(" ")
    .map((v) => Number(v));

let nums = input
    .shift()
    .split(" ")
    .map((v) => Number(v));

nums.sort((a, b) => {
    return a - b;
});

let visited = new Array(Math.max.apply(null, nums) + 1).fill(0);
nums.forEach((v) => {
    visited[v] += 1;
});

nums = nums.filter((v, i) => nums.indexOf(v) === i);

let tmp = [];
let answer = [];

backtrack();
console.log(answer.join("\n"));

function backtrack() {
    if (tmp.length === M) {
        answer.push(tmp.toString().replaceAll(",", " "));
        return;
    }
    for (let i = 0; i < nums.length; i++) {
        if (visited[nums[i]] === 0) continue;
        tmp.push(nums[i]);
        visited[nums[i]] -= 1;

        backtrack();

        tmp.pop();
        visited[nums[i]] += 1;
    }
}
