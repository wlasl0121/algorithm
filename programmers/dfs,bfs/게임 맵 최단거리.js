function solution(maps) {
    var n = maps.length;
    var m = maps[0].length;

    var visited = Array.from(new Array(n), () => new Array(m).fill(0));

    var queue = [];
    var dx = [-1, 0, 1, 0];
    var dy = [0, -1, 0, 1];
    var result = -1;

    queue.push([0, 0]);
    visited[0][0] = 1;

    while (queue.length > 0) {
        var [a, b] = queue.shift();

        for (var i = 0; i < 4; i++) {
            var [nx, ny] = [dx[i] + a, dy[i] + b];
            if (nx < 0 || ny < 0 || nx >= n || ny >= m) continue;

            if (!visited[nx][ny] && maps[nx][ny] === 1) {
                queue.push([nx, ny]);
                visited[nx][ny] = visited[a][b] + 1;
            }
        }
    }
    result = visited[n - 1][m - 1];

    if (!result) return -1;
    return result;
}

console.log(
    solution([
        [1, 0, 1, 1, 1],
        [1, 0, 1, 0, 1],
        [1, 0, 1, 1, 1],
        [1, 1, 1, 0, 1],
        [0, 0, 0, 0, 1],
    ])
);
//11
console.log(
    solution([
        [1, 0, 1, 1, 1],
        [1, 0, 1, 0, 1],
        [1, 0, 1, 1, 1],
        [1, 1, 1, 0, 0],
        [0, 0, 0, 0, 1],
    ])
);
//-1
