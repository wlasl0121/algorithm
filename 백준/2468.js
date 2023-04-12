let input = require("fs")
    .readFileSync("./백준/input.txt")
    .toString()
    .trim()
    .split("\n");

let N = Number(input.shift());

let arr = input.map((v) => {
    return v.split(" ").map((v) => Number(v));
});
let change = arr.reduce((prev, cur) => {
    return prev.concat(cur);
});
let once = change.filter((v, i) => change.indexOf(v) === i).sort();
// console.log(arr);
// console.log(once);
let dx = [-1, 0, 1, 0];
let dy = [0, -1, 0, 1];
let max = 1;

for (let q = 0; q < once.length; q++) {
    // console.log("height : ", once[q]);
    let graph = Array.from(new Array(N), () => Array(N).fill(0));

    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            bfs(graph, i, j, once[q]);
        }
    }
    let visited = Array.from(new Array(N), () => Array(N).fill(0));
    let cnt = 0;
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            if (graph[i][j] === 0 && visited[i][j] === 0) {
                if (count(graph, visited, i, j, cnt) > 0);
                cnt++;
            }
        }
    }
    // console.log(graph);
    max = Math.max(max, cnt);
    // console.log(cnt);
}
console.log(max);

function bfs(visited, x, y, height) {
    let queue = [];

    queue.push([x, y]);

    while (queue.length > 0) {
        let [a, b] = queue.shift();
        for (let i = 0; i < 4; i++) {
            let [nx, ny] = [dx[i] + a, dy[i] + b];

            if (nx < 0 || ny < 0 || nx >= N || ny >= N) continue;
            // console.log(nx, ny);
            if (!visited[nx][ny] && arr[nx][ny] <= height) {
                queue.push([nx, ny]);
                visited[nx][ny] = 1;
            }
        }
    }
}

function count(graph, visited, x, y, cnt) {
    let q = [];

    q.push([x, y]);

    while (q.length > 0) {
        let [a, b] = q.shift();

        for (let i = 0; i < 4; i++) {
            let [nx, ny] = [dx[i] + a, dy[i] + b];

            if (nx < 0 || ny < 0 || nx >= N || ny >= N) continue;
            if (!visited[nx][ny] && graph[nx][ny] === 0) {
                q.push([nx, ny]);
                visited[nx][ny] = 1;
            }
        }
    }
    return cnt + 1;
}
