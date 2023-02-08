var input = require("fs")
    .readFileSync("./백준/input.txt")
    .toString()
    .trim()
    .split("\n");

var N = Number(input.shift());
var C = Number(input.shift());
const graph = [...new Array(N + 1)].map(() => []);
const visited = new Array(N + 1).fill(false);
var cnt = 0;

for (const edge of input) {
    const [start, dest] = edge.split(" ").map((elem) => parseInt(elem));
    graph[start].push(dest);
    graph[dest].push(start);
}

visited[1] = true;
dfs(1);
console.log(cnt);

function dfs(start) {
    for (var node of graph[start]) {
        if (!visited[node]) {
            //false이면
            visited[node] = true;
            cnt++;
            dfs(node);
        }
    }
}

/**
 * 오래 쉰 탓에 머리가 비워져서 헷갈리는 것들이 많았음.
 * 전에 공부했던것들을 다시 복습하는 시간이 필요할듯
 * TODO : 다시 풀어보기
 */
