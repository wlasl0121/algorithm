var input = require("fs")
    .readFileSync("./백준/input.txt")
    .toString()
    .trim()
    .split("\n");

var N = Number(input.shift());

var graph = [];
var visited = Array.from(new Array(N), () => Array(N).fill(0));
var answer = [];

input.map((value) => {
    graph.push(value.split("").map((e) => parseInt(e)));
});

for (var i = 0; i < N; i++) {
    for (var j = 0; j < N; j++) {
        if (graph[i][j] === 1 && visited[i][j] === 0)
            answer.push(bfs(graph, i, j, visited));
    }
}

console.log(answer.length);
answer.sort((a, b) => {
    return a - b;
});
answer.map((value) => {
    console.log(value);
});

function bfs(graph, x, y, visited) {
    var dx = [-1, 0, 1, 0];
    var dy = [0, -1, 0, 1];
    var cnt = 0;

    var queue = [];
    queue.push([x, y]);
    visited[x][y] = 1;
    cnt++;

    while (queue.length > 0) {
        var [a, b] = queue.shift();
        for (var i = 0; i < 4; i++) {
            const [nx, ny] = [a + dx[i], b + dy[i]];

            if (nx < 0 || ny < 0 || nx >= N || ny >= N) continue;
            if (graph[nx][ny] === 1 && visited[nx][ny] === 0) {
                queue.push([nx, ny]);
                visited[nx][ny] = 1;
                cnt++;
            }
        }
    }
    return cnt;
}

/**
 * 아이디어는 맞았으나
 * dx, dy 좌표 활용 연습이 필요할듯...
 */
