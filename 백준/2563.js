let input = require("fs")
    .readFileSync("./백준/input.txt")
    .toString()
    .split("\n");
let n = Number(input.shift());
let arr = input.map((v) => {
    let [x, y] = v.split(" ").map((v) => Number(v));
    return [x, y];
});

let visited = Array.from(new Array(100), () => Array(100).fill(0));

for (let i = 0; i < n; i++) {
    let [x, y] = arr[i];
    fill(x, y);
}
console.log(100 * n - cnt());

function fill(x, y) {
    for (let i = x; i < x + 10; i++) {
        for (let j = y; j < y + 10; j++) {
            visited[i][j] += 1;
        }
    }
}

function cnt() {
    let cnt = 0;
    for (let i = 0; i < 100; i++) {
        for (let j = 0; j < 100; j++) {
            if (visited[i][j] > 1) {
                cnt = cnt + (visited[i][j] - 1);
            }
        }
    }
    return cnt;
}
