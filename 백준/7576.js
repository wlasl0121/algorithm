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
    return v.split(" ").map((v) => Number(v));
});

//1 : 익은 토마토
//0 : 익지 않은 토마토
//-1 : 빈칸

let dx = [-1, 0, 1, 0];
let dy = [0, -1, 0, 1];

let visited = Array.from(new Array(M), () => Array(N).fill(0));

let queue = [];

for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
        if (!visited[i][j] && graph[i][j] > 0) {
            queue.push([i, j]);
        }
    }
}

let max = -1;

max = bfs(graph, visited) - 2;

let zero = 0;
for (let i = 0; i < M; i++) {
    if (graph[i].includes(0)) {
        zero++;
    }
}

//zero > 0 이면 -1을 출력, zero === 0 이면 max 출력
console.log(zero > 0 ? -1 : max);

function bfs(graph, visited) {
    let cnt = 1;
    let prevIdx = 0;
    while (true) {
        const curIdx = queue.length;
        let change = 0;
        for (let idx = prevIdx; idx < curIdx; idx++) {
            let [a, b] = queue[idx];
            visited[a][b] = 1;
            cnt = graph[a][b] + 1;

            for (let i = 0; i < 4; i++) {
                let [nx, ny] = [dx[i] + a, dy[i] + b];

                if (nx < 0 || ny < 0 || nx >= M || ny >= N) continue;
                if (!visited[nx][ny] && graph[nx][ny] === 0) {
                    queue.push([nx, ny]);
                    graph[nx][ny] = cnt;
                    change = 1;
                }
            }
        }
        if (!change) break;
        prevIdx = curIdx;
    }

    return cnt;
}
