let input = require("fs")
    .readFileSync("./백준/input.txt")
    .toString()
    .trim()
    .split("\n");
let [N, M, R] = input
    .shift()
    .split(" ")
    .map((v) => Number(v));
let graph = Array.from(Array(N + 1), () => []);
input.map((v) => {
    let [x, y] = v.split(" ").map((v) => Number(v));
    graph[x].push(y);
    graph[y].push(x);
});

graph.forEach((v) => v.sort((a, b) => a - b));

let visited = new Array(N + 1).fill(false);
let answer = new Array(N + 1).fill(0);
let cnt = 0;

dfs(R);

function dfs(node) {
    visited[node] = true;
    answer[node] = cnt += 1;
    for (let i = 0; i < graph[node].length; i++) {
        if (visited[graph[node][i]]) continue;

        dfs(graph[node][i]);
    }
}
answer.shift();
console.log(answer.join("\n"));
