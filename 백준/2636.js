let input = require("fs")
    .readFileSync("./백준/input.txt")
    .toString()
    .trim()
    .split("\n");

let [n, m] = input
    .shift()
    .split(" ")
    .map((v) => Number(v));
let ground = input.map((v) => {
    return v.split(" ").map((v) => Number(v));
});
let time = 0;
let cnt = 0;

for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
        if (ground[i][j] === 1) {
            cnt++;
        }
    }
}
while (bfs());

function bfs() {
    let visited = Array.from(new Array(n), () => Array(m).fill(0));
    let block = cnt;
    let queue = [];

    queue.push([0, 0]);
    while (queue.length > 0) {
        let dx = [-1, 0, 1, 0];
        let dy = [0, -1, 0, 1];

        let [a, b] = queue.shift();
        for (let i = 0; i < 4; i++) {
            let [nx, ny] = [dx[i] + a, dy[i] + b];

            if (nx < 0 || ny < 0 || nx >= n || ny >= m) continue;

            if (ground[nx][ny] === 1 && !visited[nx][ny]) {
                // 다음칸이 치즈일때
                //queue에 넣어주지 x
                ground[nx][ny] = 2;
                visited[nx][ny] = 1;
                cnt--;
            } else if (ground[nx][ny] === 0 && !visited[nx][ny]) {
                // 다음칸이 공기일때
                //queue에 넣어주기 o
                queue.push([nx, ny]);
                visited[nx][ny] = 1;
            }
        }
    }
    time++;
    if (cnt === 0) {
        console.log(time);
        console.log(block);
        return false;
    }
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (ground[i][j] === 2 && visited[i][j]) {
                ground[i][j] = 0;
            }
        }
    }
    return true;
}
