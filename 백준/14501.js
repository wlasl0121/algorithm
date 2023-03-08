let input = require("fs")
    .readFileSync("./백준/input.txt")
    .toString()
    .trim()
    .split("\n");

let N = Number(input.shift());
let arr = [];
input.map((v) => {
    arr.push(v.split(" ").map((v) => Number(v)));
});

let dp = new Array(N).fill(0);
for (let i = 0; i < N; i++) {
    let [cost, profit] = arr[i];

    if (i + cost > N) continue;
    dp[i] += profit;

    for (let j = i + cost; j < N; j++) {
        dp[j] = Math.max(dp[i], dp[j]);
    }
}
console.log(Math.max(...dp));

//TODO : 다시 풀어보기
