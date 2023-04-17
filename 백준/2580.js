let input = require("fs")
    .readFileSync("백준/input.txt")
    .toString()
    .trim()
    .split("\n");
let graph = input.map((v) => {
    return v.split(" ").map((v) => Number(v));
});

let emptyArr = [];
for (let i = 0; i < graph.length; i++) {
    for (let j = 0; j < graph.length; j++) {
        if (graph[i][j] === 0) emptyArr.push([i, j]);
    }
}

// console.log(emptyArr);
if (emptyArr.length !== 0) {
    dfs(0);
}
console.log(graph.join("\n").replaceAll(",", " "));

function dfs(idx) {
    let [x, y] = emptyArr[idx];
    let num = numCheck(x, y);

    for (let i = 0; i < num.length; i++) {
        graph[x][y] = num[i];

        if (idx + 1 === emptyArr.length) return;
        let nextIdx = idx + 1;
        dfs(nextIdx);
        let [nx, ny] = emptyArr[nextIdx];
        if (graph[nx][ny] !== 0) return;
        graph[x][y] = 0;
    }
}

function numCheck(x, y) {
    let arr = [];
    let visited = new Array(10).fill(false);

    for (let i = 0; i < 9; i++) {
        if (graph[x][i] !== 0) visited[graph[x][i]] = true;
        if (graph[i][y] !== 0) visited[graph[i][y]] = true;
    }

    let nx = parseInt(x / 3) * 3;
    let ny = parseInt(y / 3) * 3;

    for (let i = nx; i < nx + 3; i++) {
        for (let j = ny; j < ny + 3; j++) {
            if (graph[i][j] !== 0) visited[graph[i][j]] = true;
        }
    }

    for (let i = 1; i < visited.length; i++) {
        if (!visited[i]) arr.push(i);
    }
    return arr;
}
