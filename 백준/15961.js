let input = require("fs")
    .readFileSync("./백준/input.txt")
    .toString()
    .trim()
    .split("\n");

let [N, d, k, c] = input
    .shift()
    .split(" ")
    .map((v) => Number(v));

let arr = input.map((v) => Number(v));
// arr = queue?

for (let i = 0; i < k - 1; i++) {
    arr.push(arr[i]);
}

let visited = new Array(d + 1).fill(0);
let max = 1;
visited[c] += 1;

let start = 0;
for (let i = start; i < k; i++) {
    if (visited[arr[i]] === 0) {
        max++;
    }
    visited[arr[i]] += 1;
}

start = 0;
let end = k;
let result = max;
for (let i = end; i < arr.length; i++) {
    visited[arr[start]] -= 1;
    if (visited[arr[start]] === 0) {
        result -= 1;
    }
    if (visited[arr[i]] === 0) result += 1;
    visited[arr[i]] += 1;
    max = Math.max(max, result);
    start++;
}

console.log(max);
