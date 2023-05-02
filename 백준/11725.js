let input = require("fs")
    .readFileSync("백준/input.txt")
    .toString()
    .trim()
    .split("\n");
let N = Number(input.shift());
let tree = Array.from(new Array(N + 1), () => Array().fill(0));
input.map((v) => {
    let [a, b] = v.split(" ").map((value) => Number(value));
    tree[a].push(b);
    tree[b].push(a);
});
let visited = new Array(N + 1).fill(0);
let queue = [];
queue.push(1);

bfs();
visited.shift();
visited.shift();
console.log(visited.join("\n"));

function bfs() {
    while (queue.length > 0) {
        let idx = queue.shift();
        let arr = tree[idx];

        for (let i = 0; i < arr.length; i++) {
            if (visited[arr[i]] < 1) {
                visited[arr[i]] = idx;
                queue.push(arr[i]);
            }
        }
    }
}
