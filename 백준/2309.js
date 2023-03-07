let input = require("fs")
    .readFileSync("./백준/input.txt")
    .toString()
    .trim()
    .split("\n");

let arr = input.map((v) => {
    return Number(v);
});

arr.sort((a, b) => {
    return a - b;
});

let seq = [];
for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
        if (i === j) continue;
        seq.push([i, j]);
    }
}

let answer = [];
for (let i = 0; i < seq.length; i++) {
    const [n, m] = seq[i];
    let sum = 0;
    let del = [];
    for (let j = 0; j < 9; j++) {
        if (j === n || j === m) continue;
        sum += arr[j];
        del.push(arr[j]);
    }
    if (sum === 100) {
        answer = [...del];
        break;
    }
}
console.log(answer.join("\n"));
