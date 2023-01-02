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
var queue = [];

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

function bfs(v) {
    var visit = new Array(N + 1).fill(false);
    var arr = [];

    visit[v] = true;
    arr.push(v);
    queue.push(v);

    for (var i = 0; i < N; i++) {
        var node = arr.shift();
        var connect = getNode(node);
        for (var j = 0; j < connect.length; j++) {
            if (!visit[connect[j]]) {
                arr.push(connect[j]);
                queue.push(connect[j]);
                visit[connect[j]] = true;
            }
        }
    }
}

function getNode(v) {
    var node = [];
    for (var i = 0; i < M; i++) {
        var empty = graph[i];
        if (empty.includes(v)) {
            var test = empty.filter((el) => el !== v);
            node.push(test[0]);
        }
    }
    var sorting = node.sort((a, b) => {
        return a - b;
    });

    /**
     * 회고록 : node.sort() 를 하게 되면 1,10,11,2,3... 이런식으로 나옴
     * 유니코드 순서로 정렬하기 때문
     * 내가 원하는 1,2,3,...10 으로 정렬하기 위해서는 위와같이 파라미터를 사용해야한다.
     * a-b가 음수냐, 양수냐 를 이용하여 오름차순으로 정렬할수있다.
     */
    //
    //
    return sorting;
}

dfs(V, visited);
console.log(stack.toString().replaceAll(",", " "));
bfs(V);
console.log(queue.toString().replaceAll(",", " "));
