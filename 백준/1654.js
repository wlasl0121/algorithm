const input = require("fs")
    .readFileSync("./백준/input.txt")
    .toString()
    .trim()
    .split("\n");

const [K, N] = input.shift().split(" ").map(Number);
const arr = input.map(Number);
arr.sort((a, b) => {
    return a - b;
});

var answer = 0;
search(arr, N, 1, arr[K - 1]);
console.log(answer);

function search(arr, target, start, end) {
    if (start > end) return 0;

    const mid = Math.floor((start + end) / 2);

    var cnt = 0;
    arr.map((value) => {
        cnt = cnt + Math.floor(value / mid);
    });

    if (cnt < target) {
        return search(arr, target, start, mid - 1);
    } else if (cnt >= target) {
        answer = Math.max(answer, mid);
        return search(arr, target, mid + 1, end);
    }
}

/**
 * 회고록 :
 * 이진탐색의 최소값과 최대값을 구하는 방법을 새로 익혔다
 * 범위 설정하는 부분에서 헷갈려서 좀 헤맸는데,
 * 포기안하고 시도했으면 풀수있었을듯해서 아쉬운 문제
 */
