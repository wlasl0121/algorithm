let input = require("fs")
    .readFileSync("./백준/input.txt")
    .toString()
    .trim()
    .split("\n");

let [N, M, K] = input
    .shift()
    .split(" ")
    .map((v) => Number(v));
let arr = new Array(N + 1).fill(BigInt(0));
const MOD = BigInt(1000000007);
for (let i = 0; i < N; i++) {
    arr[i + 1] = BigInt(input[i]);
}

let tree = new Array(N * 4).fill(BigInt(0));
let answer = [];
init(1, N, 1);

for (let i = N; i < N + M + K; i++) {
    let [a, b, c] = input[i].split(" ").map((v) => Number(v));
    // console.log(a, b, c);
    if (a === 1) {
        //변경 b번째를 c로 바꿔
        update(1, N, 1, b, arr[b], BigInt(c));
        arr[b] = BigInt(c);
    } else if (a === 2) {
        //구간곱 b부터 c까지 곱
        answer.push(multiply(1, N, 1, b, c));
    }
}
console.log(answer.join("\n"));

//1,000,000,007로 나눈 나머지 출력
function init(start, end, node) {
    if (start === end) return (tree[node] = BigInt(arr[start]));

    let mid = Math.floor((start + end) / 2);

    return (tree[node] =
        (init(start, mid, node * 2) * init(mid + 1, end, node * 2 + 1)) % MOD);
}

// (넘음)right <-- start [-------------------] end --> left(넘음)
// left -- [--<start>--------------<end>-----] -- right : 찾는 범위 안에 포함됨
function multiply(start, end, node, left, right) {
    if (left > end || right < start) return BigInt(1);
    // console.log(tree[node], start, end);
    if (left <= start && end <= right) return tree[node];

    let mid = Math.floor((start + end) / 2);

    return (
        (multiply(start, mid, node * 2, left, right) *
            multiply(mid + 1, end, node * 2 + 1, left, right)) %
        MOD
    );
}

function update(start, end, node, index, before, after) {
    if (index < start || end < index) return tree[node];

    if (start === end) {
        tree[node] =
            before === BigInt(0)
                ? after
                : ((tree[node] / before) * after) % MOD;
        return tree[node];
    }

    let mid = Math.floor((start + end) / 2);

    return (tree[node] =
        (update(start, mid, node * 2, index, before, after) *
            update(mid + 1, end, node * 2 + 1, index, before, after)) %
        MOD);
}
