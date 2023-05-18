let N = Number(
    require("fs").readFileSync("./백준/input.txt").toString().split("\n")
);
let dp = Array.from(new Array(N + 1), () => Array(10).fill(0));

dp[1] = [0, 1, 1, 1, 1, 1, 1, 1, 1, 1];

for (let i = 2; i <= N; i++) {
    //자리수 //1자리수, 2자리수, 3자리수 ...
    for (let j = 0; j < 10; j++) {
        // 0~9까지 몇개?
        if (j > 0 && j < 9) {
            dp[i][j] = (dp[i - 1][j - 1] + dp[i - 1][j + 1]) % 1000000000;
        } else if (j === 0) {
            dp[i][j] = dp[i - 1][j + 1] % 1000000000;
        } else if (j === 9) {
            dp[i][j] = dp[i - 1][j - 1] % 1000000000;
        }
    }
}
let answer = dp[N].reduce((prev, cur) => prev + cur, 0) % 1000000000;
console.log(answer);
