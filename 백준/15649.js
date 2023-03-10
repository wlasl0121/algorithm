let input = require("fs")
    .readFileSync("./백준/input.txt")
    .toString()
    .trim()
    .split("\n");

let [N, M] = input
    .shift()
    .split(" ")
    .map((v) => Number(v));

let arr = [];
for (let i = 1; i <= N; i++) {
    arr.push(i);
}
let tmp = [];
let answer = [];
let visited = new Array(N + 1).fill(false);

const backtrack = () => {
    if (tmp.length === M) {
        answer.push(tmp.toString().split(",").join(" "));
        return;
    }

    for (let i = 0; i < N; i++) {
        if (visited[i]) continue;
        visited[i] = true;
        tmp.push(arr[i]);
        backtrack();
        tmp.pop();
        visited[i] = false;
    }
};
backtrack(0);
console.log(answer.join("\n"));
