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

let tree = new Array(N * 4).fill(0);
segmentTree(1, N, 1);
function segmentTree(start, end, node) {
    if (start === end) return (tree[node] = arr[start]);

    let mid = Math.floor((start + end) / 2);
    return (tree[node] = Math.min(
        segmentTree(start, mid, node * 2),
        segmentTree(mid + 1, end, node * 2 + 1)
    ));
}

function find(start, end, node, left, right) {
    if (left > end || start > right) return Infinity;
    if (left <= start && end <= right) return tree[node];

    let mid = Math.floor((start + end) / 2);
    return Math.min(
        find(start, mid, node * 2, left, right),
        find(mid + 1, end, node * 2 + 1, left, right)
    );
}
// console.log(tree);
let answer = [];
for (let i = N; i < N + M; i++) {
    let [a, b] = input[i].split(" ").map((v) => Number(v));
    // console.log(find(1, N, 1, a, b));
    answer.push(find(1, N, 1, a, b));
}

console.log(answer.join("\n"));
