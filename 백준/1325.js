let input = require("fs")
    .readFileSync("./백준/input.txt")
    .toString()
    .trim()
    .split("\n")
    .map((i) => i.split(" ").map((v) => +v));
const [N, M] = input[0];
const graph = Array.from({ length: N + 1 }, () => []);
let answer = [];

// 인접리스트
for (let i = 1; i <= M; i++) {
    let [a, b] = input[i];
    graph[b].push(a);
}

let max = 0; // 해킹할수 있는 컴퓨터의 최대 수
const DFS = (start) => {
    const stack = [start];
    const visited = Array.from({ length: N + 1 }, () => false);
    let count = 0; // 해킹 가능한 컴퓨터의 수 카운트
    let result = 0; // 해당 컴퓨터의 해킹 가능한 최대 수
    while (stack.length) {
        let cur = stack.pop();
        if (result < count) result = count;
        visited[cur] = true;
        for (let i = 0; i < graph[cur].length; i++) {
            let value = graph[cur][i];
            if (visited[value]) continue;
            visited[value] = true;
            count += 1;
            stack.push(value);
        }
    }
    if (max < result) {
        // 현재 해킹할수 있는 컴퓨터의 최대 수보다 이번 컴퓨터의 해킹 가능한 최대 수가 크다면
        max = result;
        answer = []; // 초기화
        answer.push(start);
    } else if (max === result) {
        answer.push(start);
    }
};

for (let i = 1; i <= N; i++) {
    DFS(i);
}

console.log(answer.join(" "));

// let graph = input.map((v) => v.split(" ").map((v) => Number(v)));
// let cnt = [];
// let ans = [];

// for (let i = 0; i < graph.length; i++) {

//     dfs(graph[i]);
//     cnt[i] = answer.length;
// }

// let max = Math.max.apply(null, cnt);
// cnt.map((v, i) => {
//     if (v === max) {
//         ans.push(i);
//     }
// });
// console.log(ans.join(" "));

// function dfs(node) {
//     let visited = new Array(graph.length).fill(0);
//     let stack = [node];

//     for (let i = 0; i < graph.length; i++) {
//         if (!visited[i] && graph[i][1] === node) {
//             visited[i] = 1;
//             answer.push(graph[i]);
//             dfs(graph[i][0], graph, visited, answer);
//         }
//     }
// }
