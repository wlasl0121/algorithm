let input = require("fs")
    .readFileSync("백준/input.txt")
    .toString()
    .trim()
    .split("\n");
let K = Number(input.shift());
let index = 0;

while (K--) {
    let [V, E] = input[index++].split(" ").map(Number);
    let arr = Array.from(new Array(V + 1), () => Array().fill(0));
    let visited = new Array(V + 1).fill(0);

    for (let i = 0; i < E; i++) {
        let [a, b] = input[index + i].split(" ").map(Number);
        arr[a].push(b);
        arr[b].push(a);
    }
    function bfs(start) {
        let queue = [];
        queue.push(start);
        let check = 1;

        visited[start] = check;

        while (queue.length > 0) {
            let idx = queue.shift();

            if (visited[idx] === 1) check = 2;
            else if (visited[idx] === 2) check = 1;

            for (let j = 0; j < arr[idx].length; j++) {
                let next = arr[idx][j];
                if (!visited[next]) {
                    visited[next] = check;
                    queue.push(next);
                } else if (visited[idx] === visited[next]) {
                    return;
                }
            }
        }
    }
    for (let i = 1; i <= V; i++) {
        if (!visited[i]) bfs(i);
    }
    function isAns() {
        for (let i = 1; i <= V; i++) {
            for (let j = 1; j < arr[i].length; j++) {
                let next = arr[i][j];
                if (visited[i] === visited[next]) {
                    return console.log("NO");
                }
            }
        }
        return console.log("YES");
    }
    isAns();
    index += E;
}
// for (let i = 0; i < K; i++) {
//     let [V, E] = input
//         .shift()
//         .split(" ")
//         .map((v) => Number(v));
//     let arr = Array.from(new Array(V + 1), () => Array().fill(0));
//     let visited = new Array(V + 1).fill(0);
//     for (let j = 0; j < E; j++) {
//         let [a, b] = input
//             .shift()
//             .split(" ")
//             .map((v) => Number(v));
//         arr[a].push(b);
//         arr[b].push(a);
//         // arr.push([a, b]);
//     }
//     // console.log(arr);
//     // bfs(V, arr) ? console.log("YES") : console.log("NO");
//     // console.log(bfs(V, arr));

//     for (let j = 1; j <= V; j++) {
//         bfs(visited, arr, j);
//     }
// }

// function bfs(visited, arr, start) {
//     let queue = [];
//     queue.push(start);
//     let result = true;

//     while (queue.length > 0) {
//         let idx = queue.shift(); //idx = 2?
//         // arr[idx] = [1,3,4]
//         // console.log(idx);
//         if (visited[idx] === 0) {
//             visited[idx] = 1;
//         }
//         let node = arr[idx];
//         // console.log(node);
//         for (let i = 0; i < node.length; i++) {
//             // node[i] = 1,3,4
//             // console.log(visited);
//             if (visited[node[i]] === 0) {
//                 visited[node[i]] = (visited[idx] % 2) + 1;
//                 queue.push(node[i]);
//             } else if (
//                 visited[node[i]] !== 0 &&
//                 visited[node[i]] === visited[idx]
//             ) {
//                 result = false;
//                 break;
//             }
//         }
//         if (!result) break;
//     }
//     return result;
// }

/**
 * TODO : 이분그래프 이해는 했지만 좀 더 공부할 필요가 느껴짐
 */
