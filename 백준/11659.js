let input = require("fs")
    .readFileSync("./백준/input.txt")
    .toString()
    .split("\n");

let [N, M] = input[0].split(" ").map((v) => Number(v));
let arr = input[1].split(" ").map((v) => Number(v));
let sumArr = new Array(N + 1).fill(0);
// console.log(arr);

arr.map((v, idx) => {
    sumArr[idx + 1] = sumArr[idx] + v;
});

// console.log(sumArr);
let answer = [];
for (let i = 2; i < M + 2; i++) {
    let [a, b] = input[i].split(" ").map((v) => Number(v));
    answer.push(sumArr[b] - sumArr[a - 1]);
}
console.log(answer.join("\n"));
