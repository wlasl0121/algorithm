var input = require("fs")
    .readFileSync("./백준/input.txt")
    .toString()
    .trim()
    .split("\n");

var N = Number(input.shift());

var [X, Y] = input
    .shift()
    .split(" ")
    .map((e) => parseInt(e));

var M = Number(input.shift());
var graph = [...new Array(N + 1)].map(() => []);
input.map((value) => {
    var [x, y] = value.split(" ").map((e) => parseInt(e));
    graph[x].push(y);
    graph[y].push(x);
});

var visited = new Array(N + 1).fill(0);
var queue = [];
queue.push([X, 1]);

while (queue.length > 0) {
    var [node, answer] = queue.shift();
    visited[node] = 1;
    for (const n of graph[node]) {
        if (visited[n] === 0) {
            queue.push([n, answer + 1]);
        }
        if (n === Y) {
            console.log(answer);
            return;
        }
    }
}
console.log(-1);

/**
 * 촌수 계산하는 아이디어가 부족했다.
 */
