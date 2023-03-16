let input = require("fs")
    .readFileSync("./백준/input.txt")
    .toString()
    .trim()
    .split("\n");

let [N, K] = input
    .shift()
    .split(" ")
    .map((v) => Number(v));

const binomial = (n, r) => {
    if (r === 0 || n === r) return 1;

    return binomial(n - 1, r - 1) + binomial(n - 1, r);
};

console.log(binomial(N, K));
