let input = require("fs")
    .readFileSync("백준/input.txt")
    .toString()
    .trim()
    .split("\n");

let [N, M] = input
    .shift()
    .split(" ")
    .map((v) => Number(v));

// console.log(N, M);

let arr = [];
let visited = new Array(N + 1).fill(false);
let answer = [];
let tmp = [];
for (let i = 1; i <= N; i++) {
    arr.push(i);
}
backtrack();
console.log(answer.join("\n"));

function backtrack() {
    if (tmp.length === M) {
        answer.push(tmp.toString().replaceAll(",", " "));
        return;
    }

    for (let i = 0; i < N; i++) {
        if (visited[i]) continue;
        if (sortCheck(tmp, arr[i])) {
            visited[i] = true;
            tmp.push(arr[i]);
            backtrack();
            tmp.pop();
            visited[i] = false;
        }
    }
}

function sortCheck(tmp, number) {
    let check = true;
    if (tmp.length === 0) return check;

    for (let i = 0; i < tmp.length; i++) {
        if (tmp[i] > number) {
            check = false;
            break;
        }
    }

    return check;
}
