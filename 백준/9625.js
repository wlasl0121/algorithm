let n = Number(
    require("fs").readFileSync("백준/input.txt").toString().trim().split("\n")
);

let dp = Array.from(new Array(n + 1), () => Array(2).fill(-1));
dp[0] = [1, 0];
dp[1] = [0, 1];

let [a, b] = solve(n);
console.log(a, b);

function solve(n) {
    if (n < 1) {
        return [1, 0];
    }
    if (n === 1) {
        return [0, 1];
    }
    if (dp[n][0] !== -1 && dp[n][1] !== -1) {
        return dp[n];
    }

    let [a, b] = solve(n - 1);
    return (dp[n] = [b, a + b]);
}
