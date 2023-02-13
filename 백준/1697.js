var [N, K] = require("fs")
    .readFileSync("./백준/input.txt")
    .toString()
    .trim()
    .split(" ")
    .map((e) => Number(e));

let visited = Array(100001).fill(0);

function bfs() {
    let queue = [[N, 0]];
    visited[N] = 1;
    while (queue.length) {
        let [cur, time] = queue.shift();
        if (cur === K) return time;
        for (next of [cur - 1, cur + 1, cur * 2]) {
            if (!visited[next] && next >= 0 && next <= 100000) {
                visited[next] = 1;
                queue.push([next, time + 1]);
            }
        }
    }
}
console.log(bfs());
// var visited = Array(100001).fill(0);
// var queue = [[N, 0]];
// visited[N] = 1;

// while (queue.length) {
//     var [node, time] = queue.shift();
//     if (node === K) {
//         console.log(time);
//         break;
//     }

//     visited[node] = 1;

//     if (node - 1 >= 0) {
//         queue.push([node - 1, time + 1]);
//     }
//     if (node + 1 <= 100000) {
//         queue.push([node + 1, time + 1]);
//     }
//     if (node * 2 <= 100000) {
//         queue.push([node * 2, time + 1]);
//     }
// }

/**
 * TODO : 다시 풀어보기
 * 시간초과 이유를 모르겠음
 */
