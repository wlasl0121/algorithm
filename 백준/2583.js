let input = require("fs")
    .readFileSync("백준/input.txt")
    .toString()
    .trim()
    .split("\n");
let [N, M, K] = input
    .shift()
    .split(" ")
    .map((v) => Number(v));
let arr = input.map((v) => {
    return v.split(" ").map((v) => Number(v));
});

let graph = Array.from(new Array(N), () => Array(M).fill(0));
let visited = Array.from(new Array(N), () => Array(M).fill(0));

for (let q = 0; q < K; q++) {
    let [sy, sx, ey, ex] = arr[q];
    for (let i = sx; i < ex; i++) {
        for (let j = sy; j < ey; j++) {
            graph[i][j] = 1;
        }
    }
}
let answer = [];
for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
        if (!visited[i][j] && !graph[i][j]) {
            answer.push(bfs(i, j));
        }
    }
}
answer.sort((a, b) => {
    return a - b;
});
console.log(answer.length);
console.log(answer.toString().replaceAll(",", " "));

function bfs(x, y) {
    let dx = [-1, 0, 1, 0];
    let dy = [0, -1, 0, 1];

    let queue = [];
    queue.push([x, y]);
    visited[x][y] = 1;
    let cnt = 1;

    while (queue.length > 0) {
        let [a, b] = queue.shift();
        for (let i = 0; i < 4; i++) {
            let [nx, ny] = [dx[i] + a, dy[i] + b];
            if (nx < 0 || ny < 0 || nx >= N || ny >= M) continue;

            if (!visited[nx][ny] && graph[nx][ny] === 0) {
                queue.push([nx, ny]);
                visited[nx][ny] = 1;
                cnt++;
            }
        }
    }
    return cnt;
}

/**
0 0 0 0 1 1 0
0 1 0 0 1 1 0
1 1 1 1 0 0 0
1 1 1 1 0 0 0
0 1 0 0 0 0 0

0 0 0 0 0 0 0
0 0 0 0 0 0 0
0 0 0 0 0 0 0
0 0 0 0 0 0 0
0 0 0 0 0 0 0 



x y x y
0 2 4 4
1 1 2 5
4 0 6 2

5*7


 */
