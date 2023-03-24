let input = require("fs")
    .readFileSync("./백준/input.txt")
    .toString()
    .trim()
    .split("\n");
let T = Number(input.shift());

for (let t = 0; t < T; t++) {
    let [M, N, K] = input
        .shift()
        .split(" ")
        .map((v) => Number(v));
    // console.log(T);
    // console.log(M, N, K);
    let arr = setArr(M, N, K);
    console.log(arr);
    let visited = Array.from(new Array(N), () => new Array(M).fill(false));
    console.log(visited);
    let cnt = 0;
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            if (visited[i][j] === false && arr[i][j] === 1) {
                // console.log(i, j);
                bfs(arr, visited, i, j) === true ? cnt++ : (cnt += 0);
            }
        }
    }
    console.log(cnt);
}

function bfs(graph, visited, y, x, N, M) {
    let dx = [0, 1, 0, -1];
    let dy = [-1, 0, 1, 0];
    let cnt = 0;

    let queue = [];

    queue.push([y, x]);
    visited[y][x] = true;
    cnt++;
    // console.log(queue);
    while (queue.length > 0) {
        let [a, b] = queue.shift();
        // console.log(a, b);
        // console.log(queue);

        for (let i = 0; i < 4; i++) {
            // console.log("ny,nx = ", [a + dy[i], b + dx[i]]);
            const [ny, nx] = [a + dy[i], b + dx[i]];
            // console.log("y=", ny, "x=", nx);
            if (ny < 0 || nx < 0 || ny >= graph[0].length || nx >= graph.length)
                continue;
            // console.log(ny, nx);
            if (graph[ny][nx] === 1 && visited[ny][nx] === false) {
                visited[ny][nx] = true;
                queue.push([ny, nx]);
                cnt++;
            }
        }
    }
    return cnt > 0 ? true : false;
}

function setArr(M, N, K) {
    let arr = Array.from(new Array(N), () => new Array(M).fill(0));
    // console.log(arr);
    // console.log(M, N);
    for (let i = 0; i < K; i++) {
        let [y, x] = input
            .shift()
            .split(" ")
            .map((v) => Number(v));
        // console.log(y, x);
        arr[x][y] = 1;
        // console.log(arr);
    }
    return arr;
    // console.log(arr);
}
