let input = require("fs")
    .readFileSync("./백준/input.txt")
    .toString()
    .trim()
    .split("\n");

let [a, b, c] = input
    .shift()
    .split(" ")
    .map((v) => BigInt(v));

function power(p) {
    if (p === 1n) {
        return a % c;
    }
    let half = power(p / 2n) % c;

    if (p % 2n) {
        return (half * half * (a % c)) % c;
    }
    return (half * half) % c;
}

console.log(power(b).toString());
