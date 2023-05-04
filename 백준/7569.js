let input = require("fs")
    .readFileSync("백준/input.txt")
    .toString()
    .trim()
    .split("\n");
let [M, N, H] = input
    .shift()
    .split(" ")
    .map((v) => Number(v));
let visited = [];
let tomato = [];

for (let k = 0; k < H; k++) {
    visited.push(Array.from(new Array(N), () => Array(M).fill(0)));
    let arr = [];
    for (let i = 0; i < N; i++) {
        let line = input
            .shift()
            .split(" ")
            .map((v) => Number(v));
        arr.push(line);
    }
    tomato.push(arr);
}
// console.log(tomato);
// console.log(visited);

let dx = [-1, 0, 1, 0, 0, 0];
let dy = [0, -1, 0, 1, 0, 0];
let dz = [0, 0, 0, 0, 1, -1];

let queue = [];
let zero = false;
let answer = 0;

for (let k = 0; k < H; k++) {
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            if (tomato[k][i][j] === 1) {
                visited[k][i][j] = 1;
                queue.push([k, i, j]);
            } else if (tomato[k][i][j] === -1) {
                visited[k][i][j] = 1;
            } else if (tomato[k][i][j] === 0) {
                zero = true;
            }
        }
    }
}

if (!zero) {
    answer = 0;
} else {
    answer = bfs(queue);

    for (let k = 0; k < H; k++) {
        for (let i = 0; i < N; i++) {
            for (let j = 0; j < M; j++) {
                if (visited[k][i][j] === 0) {
                    answer = -1;
                    break;
                }
            }
        }
    }
}
console.log(answer);

function rangeCheck(z, x, y) {
    if (z < 0 || x < 0 || y < 0 || z >= H || x >= N || y >= M) return false;

    return true;
}
function bfs(queue) {
    let cnt = 0;
    let result = 0;
    while (cnt !== queue.length) {
        let [h, a, b] = queue[cnt];

        for (let i = 0; i < 6; i++) {
            let [nz, nx, ny] = [h + dz[i], a + dx[i], b + dy[i]];

            if (
                rangeCheck(nz, nx, ny) &&
                visited[nz][nx][ny] === 0 &&
                tomato[nz][nx][ny] === 0
            ) {
                queue.push([nz, nx, ny]);
                visited[nz][nx][ny] = visited[h][a][b] + 1;
                result = visited[nz][nx][ny];
            }
        }
        cnt++;
    }
    return result - 1;
}
