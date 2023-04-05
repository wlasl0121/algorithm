let input = require("fs")
    .readFileSync("./백준/input.txt")
    .toString()
    .trim()
    .split("\n");

let t = Number(input.shift());
let answer = [];
for (let i = 0; i < t; i++) {
    let store = Number(input.shift());
    let arr = input.splice(0, store + 2).map((v) => {
        return v.split(" ").map((v) => Number(v));
    });
    let visited = new Array(arr.length).fill(0);
    let queue = [];
    queue.push(arr.shift());
    answer.push(bfs(arr, queue, visited) ? "happy" : "sad");
}
console.log(answer.join("\n"));

function bfs(arr, queue, visited) {
    let end = arr[arr.length - 1];
    let answer = false;
    while (queue.length > 0) {
        let [x, y] = queue.shift();
        if (end[0] === x && end[1] === y) {
            answer = true;
            break;
        }

        for (let i = 0; i < arr.length; i++) {
            if (
                !visited[i] &&
                Math.abs(arr[i][0] - x) + Math.abs(arr[i][1] - y) <= 1000
            ) {
                visited[i] = 1;
                queue.push(arr[i]);
            }
        }
    }
    return answer;
}

require("fs").writeFileSync("./백준/output.txt", JSON.stringify(answer));
