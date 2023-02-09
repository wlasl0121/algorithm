var input = require("fs")
    .readFileSync("./백준/input.txt")
    .toString()
    .trim()
    .split("\n");

var [N, M] = input
    .shift()
    .split(" ")
    .map((e) => parseInt(e));

var graph = [];
var visited = Array.from(new Array(N), () => new Array(M).fill(0));
var queue = [];
input.map((value) => {
    graph.push(value.split("").map((e) => parseInt(e)));
});
// console.log(graph);
bfs(graph, 0, 0, visited);
console.log(visited[N - 1][M - 1]);

///bfs -> queue -> shift,push

function bfs(graph, i, j, visited) {
    visited[i][j] = 1;
    queue.push([i, j]);

    while (queue.length > 0) {
        var [x, y] = queue.shift();
        if (x === N - 1 && y === M - 1) return;

        if (y - 1 > -1 && graph[x][y - 1] && !visited[x][y - 1]) {
            queue.push([x, y - 1]);
            visited[x][y - 1] = visited[x][y] + 1;
        }
        if (y + 1 < M && graph[x][y + 1] && !visited[x][y + 1]) {
            queue.push([x, y + 1]);
            visited[x][y + 1] = visited[x][y] + 1;
        }
        if (x - 1 > -1 && graph[x - 1][y] && !visited[x - 1][y]) {
            queue.push([x - 1, y]);
            visited[x - 1][y] = visited[x][y] + 1;
        }
        if (x + 1 < N && graph[x + 1][y] && !visited[x + 1][y]) {
            queue.push([x + 1, y]);
            visited[x + 1][y] = visited[x][y] + 1;
        }
        // console.log(visited);
    }
}
