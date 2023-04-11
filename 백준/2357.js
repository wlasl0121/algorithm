let input = require("fs")
    .readFileSync("./백준/input.txt")
    .toString()
    .trim()
    .split("\n");

let [N, M] = input
    .shift()
    .split(" ")
    .map((v) => Number(v));

let arr = new Array(N + 1).fill(0);
for (let i = 1; i < N + 1; i++) {
    arr[i] = Number(input[i - 1]);
}
// console.log(arr);

let minTree = new Array(N * 4).fill(0);
let maxTree = new Array(N * 4).fill(0);

createMin(1, N, 1, true);
createMin(1, N, 1, false);

function createMin(start, end, node, bool) {
    if (start === end && bool) return (minTree[node] = arr[start]);
    else if (start === end && !bool) return (maxTree[node] = arr[start]);

    let mid = Math.floor((start + end) / 2);

    if (bool) {
        return (minTree[node] = Math.min(
            createMin(start, mid, node * 2, true),
            createMin(mid + 1, end, node * 2 + 1, true)
        ));
    } else {
        return (maxTree[node] = Math.max(
            createMin(start, mid, node * 2, false),
            createMin(mid + 1, end, node * 2 + 1, false)
        ));
    }
}

// console.log(minTree);
// console.log(maxTree);

function find(start, end, node, left, right, bool) {
    // bool = true : min // bool = false : max
    if (left > end || start > right) {
        if (bool) return Infinity;
        else return 0;
    }

    if (left <= start && end <= right && bool) return minTree[node];
    else if (left <= start && end <= right && !bool) return maxTree[node];

    let mid = Math.floor((start + end) / 2);

    if (bool) {
        return Math.min(
            find(start, mid, node * 2, left, right, true),
            find(mid + 1, end, node * 2 + 1, left, right, true)
        );
    } else {
        return Math.max(
            find(start, mid, node * 2, left, right, false),
            find(mid + 1, end, node * 2 + 1, left, right, false)
        );
    }
}
let answer = [];
for (let i = N; i < N + M; i++) {
    let [a, b] = input[i].split(" ").map((v) => Number(v));
    // console.log(a, b);
    answer.push(`${find(1, N, 1, a, b, true)} ${find(1, N, 1, a, b, false)}`);
}
console.log(answer.join("\n"));
