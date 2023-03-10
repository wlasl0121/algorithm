let input = require("fs")
    .readFileSync("./백준/input.txt")
    .toString()
    .trim()
    .split("\n");

let [N, S] = input
    .shift()
    .split(" ")
    .map((v) => Number(v));

let arr = input
    .shift()
    .split(" ")
    .map((v) => Number(v));

let cnt = 0;
let tmp = [];

const backtrack = (idx) => {
    if (tmp.length > 0) {
        let sum = tmp.reduce((prev, cur, _) => {
            return prev + cur;
        }, 0);
        if (sum === S) cnt++;
    }

    for (let i = idx; i < N; i++) {
        tmp.push(arr[i]);
        backtrack(i + 1);
        tmp.pop();
    }
};

backtrack(0);
console.log(cnt);
