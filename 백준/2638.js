let input = require("fs")
    .readFileSync("백준/input.txt")
    .toString()
    .trim()
    .split("\n");

let [N, M] = input
    .shift()
    .split(" ")
    .map((v) => Number(v));
let graph = input.map((v) => {
    let arr = v.split(" ").map((v) => Number(v));
    return arr;
});
let visited = Array.from(new Array(N), () => Array(M).fill(0));
let result = 0;
let dx = [-1, 0, 1, 0];
let dy = [0, -1, 0, 1];

// console.log(graph);
// 외부공기 2로 바꾸고 내부공기는 0

while (true) {
    let ch = false;
    checkInOut();
    visited = Array.from(Array(N), () => Array(M).fill(0));
    //visited 초기화하고 시작

    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            if (graph[i][j] === 1) {
                let cnt = 0;
                for (let k = 0; k < 4; k++) {
                    let nx = i + dx[k];
                    let ny = j + dy[k];
                    if (
                        nx >= 0 &&
                        ny >= 0 &&
                        nx < N &&
                        ny < M &&
                        graph[nx][ny] === 2
                    ) {
                        cnt++;
                    }
                }
                if (cnt >= 2) {
                    graph[i][j] = 3;
                    ch = true;
                }
            }
        }
    }

    if (ch) {
        for (let i = 0; i < N; i++) {
            for (let j = 0; j < M; j++) {
                if (graph[i][j] === 3) {
                    graph[i][j] = 2;
                }
            }
        }
    }
    result++;

    let hasCheess = false;
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            if (graph[i][j] === 1) {
                hasCheess = true;
            }
        }
    }

    if (!hasCheess) break;
}

console.log(result);

function checkInOut() {
    let queue = [];
    queue.push([0, 0]);
    visited = Array.from(Array(N), () => Array(M).fill(0));

    while (queue.length > 0) {
        let [a, b] = queue.shift();

        for (let i = 0; i < 4; i++) {
            let [nx, ny] = [dx[i] + a, dy[i] + b];
            if (nx < 0 || ny < 0 || nx >= N || ny >= M) continue;
            if (visited[nx][ny] === 0 && graph[nx][ny] !== 1) {
                graph[nx][ny] = 2;
                queue.push([nx, ny]);
                visited[nx][ny] = 1;
            }
        }
    }
}

/**
 * 
 
0 0 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0 0
0 1 1 0 0 0 1 1 0
0 1 0 1 1 1 0 1 0
0 1 0 0 1 0 0 1 0
0 1 0 1 1 1 0 1 0
0 1 1 0 0 0 1 1 0
0 0 0 0 0 0 0 0 0
 */
