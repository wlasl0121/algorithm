let input = require("fs")
    .readFileSync("백준/input.txt")
    .toString()
    .trim()
    .split("\n");

let [N, M] = input
    .shift()
    .split(" ")
    .map((v) => Number(v));
let nArr = new Set();
let mArr = new Set();
for (let i = 0; i < N; i++) {
    nArr.add(input[i]);
}
for (let i = N; i < N + M; i++) {
    mArr.add(input[i]);
}

let answer = intersection(nArr, mArr).sort();
console.log(answer.length);
console.log(answer.join("\n"));

function intersection(a, b) {
    let arr = [];
    a.forEach((element) => {
        if (b.has(element)) arr.push(element);
    });

    return arr;
}
