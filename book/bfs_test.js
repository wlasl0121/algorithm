var answer = [];

function bfs(graph, start, visited) {
    var queue = [];
    queue.push(start);
    visited[start] = true;

    while (answer.length < graph.length - 1) {
        var node = queue.shift(); //최상단 노드
        answer.push(node);

        for (var i = 0; i < graph[node].length; i++) {
            if (!visited[graph[node][i]]) {
                queue.push(graph[node][i]);
                visited[graph[node][i]] = true;
            }
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

bfs(graph, 1, visited);

console.log(answer.toString().replaceAll(",", " "));
