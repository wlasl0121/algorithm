let input = require("fs")
    .readFileSync("./백준/input.txt")
    .toString()
    .trim()
    .split("\n");

let N = Number(input.shift());

for (let i = 0; i < N; i++) {
    let sum = 0;
    let cnt = 0;
    for (let j = 0; j < input[i].length; j++) {
        if (input[i][j] === "O") {
            cnt++;
            sum += cnt;
        } else {
            cnt = 0;
        }
    }
    console.log(sum);
}
