let input = require("fs")
    .readFileSync("./백준/input.txt")
    .toString()
    .trim()
    .split("\n");

const [N, K] = input
    .shift()
    .split(" ")
    .map((v) => parseInt(v));

let coin = input.map((v) => parseInt(v));

coin.sort((a, b) => {
    return b - a;
});

let cnt = 0;
let sum = 0;
let k = K;
for (let i = 0; i < N; i++) {
    if (k / coin[i] >= 1.0) {
        const shareCoin = Math.floor(k / coin[i]);
        cnt += shareCoin;
        sum += shareCoin * coin[i];
        k = k % coin[i];
    }
    if (sum === K) break;
}
console.log(cnt);
