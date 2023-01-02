var input = require("fs")
    .readFileSync("./백준/input.txt")
    .toString()
    .split("\n");

var N = Number(input[0].split(" ")[0]); //x //가로
var M = Number(input[0].split(" ")[1]); //y //세로
var graph = [];

var visited = Array.from(new Array(M), () => new Array(N).fill(false));

input.reduce((_, cur) => {
    graph.push(cur.split(""));
});
// console.log(graph);

var b_total = 0;
var w_total = 0;

for (var i = 0; i < M; i++) {
    for (var j = 0; j < N; j++) {
        // console.log(i, j);
        if (!visited[i][j]) {
            // console.log(i, j);
            bfs(i, j, graph[i][j]);
            // console.log(visited);
        }
    }
}
console.log(`${w_total} ${b_total}`);
// bfs(0, 0, graph[0][0]);
// console.log(visited);

function bfs(x, y, v) {
    var queue = [];
    var coor = [];
    queue.push(`${x},${y}`); // 0,0
    visited[x][y] = true;
    var cnt = 1;

    while (queue.length > 0) {
        var str = queue.shift().split(",");

        coor = coordinate(Number(str[0]), Number(str[1]));

        for (var i = 0; i < coor.length; i++) {
            if (
                graph[coor[i][0]][coor[i][1]] === v &&
                !visited[coor[i][0]][coor[i][1]]
            ) {
                queue.push(`${coor[i][0]},${coor[i][1]}`);
                visited[coor[i][0]][coor[i][1]] = true;
                cnt++;
            }
        }
        // console.log(queue);
    }
    if (v === "W") {
        w_total = w_total + cnt * cnt;
    } else if (v === "B") {
        b_total = b_total + cnt * cnt;
    }
}

function coordinate(x, y) {
    var arr = [];
    var coor = [
        [x - 1, y],
        [x, y - 1],
        [x, y + 1],
        [x + 1, y],
    ];
    for (var i = 0; i < 4; i++) {
        // console.log(coor[i][0], coor[i][1]);
        // if (coor[i][0] < M) {
        //     console.log(coor[i]);
        // }
        // if (coor[i][1] < N) {
        //     console.log(coor[i]);
        // }
        if (
            coor[i][0] > -1 &&
            coor[i][1] > -1 &&
            coor[i][1] < N &&
            coor[i][0] < M
        ) {
            // console.log(coor[i]);
            arr.push(coor[i]);
        }
    }
    return arr;
}
