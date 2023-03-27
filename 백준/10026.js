let input = require("fs")
    .readFileSync("./백준/input.txt")
    .toString()
    .trim()
    .split("\n");
let n = Number(input.shift());
let ground = input.map((v) => v.split(""));

let visited = Array.from(new Array(n), () => Array(n).fill(false));

let cnt = 0;

for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        if (!visited[i][j]) {
            bfs(i, j);
            cnt++;
        }
    }
}
visited = Array.from(new Array(n), () => Array(n).fill(false));
let rgbcnt = 0;
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        if (ground[i][j] === "G") {
            ground[i][j] = "R";
        }
    }
}
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        if (!visited[i][j]) {
            bfs(i, j);
            rgbcnt++;
        }
    }
}
console.log(cnt, rgbcnt);

function bfs(x, y) {
    let queue = [];
    let dx = [-1, 0, 1, 0];
    let dy = [0, -1, 0, 1];

    queue.push([x, y]);
    visited[x][y] = true;

    while (queue.length > 0) {
        let [a, b] = queue.shift();

        for (let i = 0; i < 4; i++) {
            let nx = dx[i] + a;
            let ny = dy[i] + b;

            if (nx < 0 || ny < 0 || nx >= n || ny >= n) continue;
            if (!visited[nx][ny] && ground[nx][ny] === ground[a][b]) {
                queue.push([nx, ny]);
                visited[nx][ny] = true;
            }
        }
    }
}
