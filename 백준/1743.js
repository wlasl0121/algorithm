var input = require("fs")
    .readFileSync("./백준/input.txt")
    .toString()
    .trim()
    .split("\n");

/**
 * 회고록 : 입력 배열의 길이가 안맞는 경우에 '런타임 에러(TypeError)'가 나올수있다.
 * 예제 데이터가 하나 더 많게 나오는 경우가 있을 수 있다는 것.
 * 예상 결과 : ["1", "2", "3"]
 * 실제 결과 : ["1", "2", "3", ""]
 * 이런 식으로 나올 수 있기때문에
 * "trim()" 함수를 쓰는것이 좋다.
 * trim() : 문자열의 가장 앞부분과 가장 뒷부분의 공백('','\n')을 모두 지워주는 역할을 한다.
 */

var N = Number(input[0].split(" ")[0]); //세로
var M = Number(input[0].split(" ")[1]); //가로
var K = Number(input[0].split(" ")[2]); //음식물 쓰레기 개수

var visited = Array.from(new Array(N), () => new Array(M).fill(false));
var graph = Array.from(new Array(N), () => new Array(M).fill("."));

var cnt = 0;
var max = 0;

input.reduce((_, cur) => {
    y = Number(cur.split(" ")[0]);
    x = Number(cur.split(" ")[1]);
    graph[y - 1][x - 1] = "#";
});

for (var i = 0; i < N; i++) {
    for (var j = 0; j < M; j++) {
        if (!visited[i][j] && graph[i][j] === "#") {
            bfs(i + 1, j + 1);
        }
    }
}
console.log(max);

function bfs(i, j) {
    var queue = [];

    queue.push([i, j]);
    visited[i - 1][j - 1] = true;

    // console.log(queue);
    // console.log(visited);

    while (queue.length > 0) {
        // for (var j = 0; j < 4; j++) {
        var node = queue.shift();
        // console.log(node);
        cnt++;

        var next = getNode(node[0], node[1]);

        // console.log(next);
        // console.log(next.length);
        for (var i = 0; i < next.length; i++) {
            // console.log(next[i][0], next[i][1]);
            // console.log(graph[next[i][0] - 1][next[i][1] - 1]);
            if (
                graph[next[i][0] - 1][next[i][1] - 1] === "#" &&
                !visited[next[i][0] - 1][next[i][1] - 1]
            ) {
                queue.push([next[i][0], next[i][1]]);
                visited[next[i][0] - 1][next[i][1] - 1] = true;
                // console.log("현재까지의 큐 : ");
                // console.log(queue);
            }
        }
        // console.log(queue.length);
        // console.log("-------------------------");
    }
    if (max < cnt) {
        max = cnt;
    }
    cnt = 0;
}

function getNode(y, x) {
    var dy = [-1, 0, 0, 1];
    var dx = [0, -1, 1, 0];
    //상 : -1,0
    //좌 : 0, -1
    //우 : 0, 1
    //하 : 1, 0
    var node = [];

    for (var i = 0; i < 4; i++) {
        var yy = y + dy[i];
        var xx = x + dx[i];
        if (yy > 0 && xx > 0 && yy <= N && xx <= M) {
            node.push([yy, xx]);
        }
    }
    return node;
}
