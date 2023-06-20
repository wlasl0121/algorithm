let [n] = require("fs")
    .readFileSync("./백준/input.txt")
    .toString()
    .trim()
    .split("\n");

let answer = [];

hanoi(+n, 1, 2, 3);

console.log(Math.pow(2, +n) - 1);
console.log(answer.join("\n"));

function hanoi(n, start, mid, end) {
    if (n === 1) {
        answer.push(`${start} ${end}`);
        return;
    }

    hanoi(n - 1, start, end, mid);

    //start -> end
    answer.push(`${start} ${end}`);

    hanoi(n - 1, mid, start, end);
}
