let input = require("fs")
    .readFileSync("./백준/input.txt")
    .toString()
    .trim()
    .split("\n");

let [N, M, K] = input
    .shift()
    .split(" ")
    .map((v) => Number(v));
// console.log(N, M, K);
let arr = new Array(N + 1).fill(0);
for (let i = 1; i <= N; i++) {
    arr[i] = BigInt(input[i - 1]);
}
// console.log(arr);

let tree = new Array(N * 4).fill(0);
segmentTree(1, N, 1);
function segmentTree(start, end, node) {
    if (start === end) return (tree[node] = arr[start]);

    let mid = Math.floor((start + end) / 2);

    return (tree[node] =
        BigInt(segmentTree(start, mid, node * 2)) +
        BigInt(segmentTree(mid + 1, end, node * 2 + 1)));
}

// console.log(tree);

function sum(start, end, node, left, right) {
    if (left > end || right < start) return BigInt(0);
    if (left <= start && end <= right) return BigInt(tree[node]);

    let mid = Math.floor((start + end) / 2);

    return (
        BigInt(sum(start, mid, node * 2, left, right)) +
        BigInt(sum(mid + 1, end, node * 2 + 1, left, right))
    );
}

function update(start, end, node, index, diff) {
    if (index < start || end < index) return;
    tree[node] += diff;
    if (start === end) return;
    let mid = Math.floor((start + end) / 2);

    update(start, mid, node * 2, index, diff);
    update(mid + 1, end, node * 2 + 1, index, diff);
}

// update(1, N, 1, 3, 6 - arr[3]);
// update(0, N - 1, 1, 2, 1 - arr[2 - 1]);
// console.log(tree);

let answer = [];
for (let i = N; i < N + M + K; i++) {
    let [a, b, c] = input[i].split(" ").map((v) => Number(v));
    if (a === 1) {
        let diff = BigInt(c) - arr[b];
        arr[b] = BigInt(c);
        update(1, N, 1, b, diff);
    } else if (a === 2) {
        answer.push(sum(1, N, 1, b, BigInt(c)));
    }
}
console.log(answer.join("\n"));
