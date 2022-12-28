var answer = [];

function dfs(graph, v, visited) {
    visited[v] = true;
    answer.push(v);

    for (var i = 0; i < graph[v].length; i++) {
        if (!visited[graph[v][i]]) {
            dfs(graph, graph[v][i], visited);
        }
    }
}

var graph = [
    [],
    [2, 3, 8],
    [1, 7],
    [1, 4, 5],
    [3, 5],
    [3, 4],
    [7],
    [2, 6, 8],
    [1, 7],
];

var visited = new Array(10).fill(false);

dfs(graph, 1, visited);

console.log(answer.toString().replaceAll(",", " "));
