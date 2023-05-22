let input = require("fs")
    .readFileSync("./백준/input.txt")
    .toString()
    .split("\n");

let [N, M] = input
    .splice(0, 1)
    .toString()
    .split(" ")
    .map((v) => Number(v));

let arr = input.splice(0, N).map((v) => {
    return v.split(" ").map((v) => Number(v));
});

let dp = Array.from(new Array(N + 1), () => Array(N + 1).fill(0));

for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= N; j++) {
        dp[i][j] =
            arr[i - 1][j - 1] + dp[i - 1][j] + dp[i][j - 1] - dp[i - 1][j - 1];
    }
}

let answer = [];
input.splice(0, M).map((v) => {
    let [x1, y1, x2, y2] = v.split(" ").map((v) => Number(v));
    answer.push(
        dp[x2][y2] - dp[x2][y1 - 1] - dp[x1 - 1][y2] + dp[x1 - 1][y1 - 1]
    );
});

console.log(answer.join("\n"));
