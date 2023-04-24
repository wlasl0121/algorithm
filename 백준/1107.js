let [N, M, btn] = require("fs")
    .readFileSync("백준/input.txt")
    .toString()
    .trim()
    .split("\n");

let visited = new Array(10).fill(true);
if (btn) {
    btn.split(" ").map((v) => {
        visited[Number(v)] = false;
    });
}

let cnt = Math.abs(N - 100);

for (let i = 0; i < 1000000; i++) {
    let str = i.toString();
    let isTrue = true;

    for (let j = 0; j < str.length; j++) {
        if (!visited[str[j]]) {
            isTrue = false;
            break;
        }
    }
    if (isTrue) {
        cnt = Math.min(cnt, Math.abs(N - i) + str.length);
    }
}
console.log(cnt);
