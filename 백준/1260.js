var input = require("fs")
    .readFileSync("./백준/input.txt")
    .toString()
    .split("\n");

var N = Number(input[0].split(" ")[0]);
var M = Number(input[0].split(" ")[1]);
var V = Number(input[0].split(" ")[2]);

var graph = [];
input.reduce((prev, current, index) => {
    graph.push([
        Number(input[index].split(" ")[0]),
        Number(input[index].split(" ")[1]),
    ]);
});

var visited = new Array(N + 1).fill(false);
var stack = [];

function dfs(v, visited) {
    stack.push(v);
    visited[v] = true;

    var arr = getNode(v);
    for (var i = 0; i < arr.length; i++) {
        if (!visited[arr[i]]) {
            dfs(arr[i], visited);
        }
    }
}

function bfs() {}

function getNode(v) {
    var node = [];
    for (var i = 0; i < M; i++) {
        var empty = graph[i];
        if (empty.includes(v)) {
            var test = empty.filter((el) => el !== v);
            node.push(test[0]);
        }
    }
    return node.sort();
}

dfs(V, visited);
console.log(stack);
