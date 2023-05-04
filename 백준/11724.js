let input = require("fs")
    .readFileSync("백준/input.txt")
    .toString()
    .trim()
    .split("\n");
let [N, M] = input
    .shift()
    .split(" ")
    .map((v) => Number(v));

let graph = Array.from(new Array(N + 1), () => Array().fill(0));
let visited = new Array(N + 1).fill(false);

for (let i = 0; i < M; i++) {
    let [a, b] = input[i].split(" ").map((v) => Number(v));
    graph[a].push(b);
    graph[b].push(a);
}

let ans = 0;
for (let i = 1; i <= N; i++) {
    if (!visited[i]) {
        dfs(i);
        ans++;
    }
}
console.log(ans);

function dfs(v) {
    visited[v] = true;
    for (let i = 0; i < graph[v].length; i++) {
        if (!visited[graph[v][i]]) {
            dfs(graph[v][i]);
        }
    }
}
