let input = require("fs")
    .readFileSync("./백준/input.txt")
    .toString()
    .trim()
    .split("\n");

let n = Number(input.shift());
let timeline = input.map((v) => {
    return v.split(" ").map((v) => Number(v));
});
let end = 0;
let cnt = 0;
timeline.sort((a, b) => {
    if (a[1] === b[1]) {
        return a[0] - b[0];
    } else {
        return a[1] - b[1];
    }
});
for (let i = 0; i < n; i++) {
    if (timeline[i][0] >= end) {
        end = timeline[i][1];
        cnt++;
    }
}
console.log(cnt);
