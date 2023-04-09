let input = require("fs")
    .readFileSync("./백준/input.txt")
    .toString()
    .trim()
    .split("\n");

let N = Number(input.shift());
let graph = input.map((v) => {
    return v.split(" ").map((v) => Number(v));
});

let shark = {
    x: 0,
    y: 0,
    ex: 2,
    lv: 2,
};
let fish = [];
let answer = 0;

for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
        if (graph[i][j] === 9) {
            graph[i][j] = 0;
            shark.x = i;
            shark.y = j;
            break;
        }
    }
}
bfs(shark.x, shark.y);

//1)위쪽 우선
//2)왼쪽 우선
function bfs(x, y) {
    let queue = [];
    let visited = Array.from(new Array(N), () => Array(N).fill(0));

    fish = [];

    queue.push([x, y, 0]);
    while (queue.length > 0) {
        let dx = [-1, 0, 1, 0];
        let dy = [0, -1, 0, 1];
        let [a, b, d] = queue.shift();

        for (let i = 0; i < 4; i++) {
            let nx = dx[i] + a;
            let ny = dy[i] + b;
            let dis = d + 1;

            if (nx < 0 || ny < 0 || nx >= N || ny >= N) continue;

            if (!visited[nx][ny] && graph[nx][ny] <= shark.lv) {
                visited[nx][ny] = 1;
                queue.push([nx, ny, dis]);
                if (graph[nx][ny] !== 0 && graph[nx][ny] < shark.lv) {
                    fish.push({ x: nx, y: ny, dis: dis });
                }
            }
        }
    }
}

while (fish.length > 0) {
    if (fish.length === 1) {
        let tmp = fish.shift();
        shark.x = tmp.x;
        shark.y = tmp.y;
        graph[shark.x][shark.y] = 0;
        shark.ex--;
        if (shark.ex === 0) {
            shark.lv += 1;
            shark.ex = shark.lv;
        }
        answer += tmp.dis;
        bfs(shark.x, shark.y);
    } else {
        fish.sort((a, b) => {
            let A = a.dis;
            let B = b.dis;
            if (A < B) return -1;
            else if (A > B) return 1;
            else {
                A = a.x;
                B = b.x;
                if (A < B) return -1;
                else if (A > B) return 1;
                else {
                    A = a.y;
                    B = b.y;
                    if (A < B) return -1;
                    else if (A > B) return 1;
                    else return 0;
                }
            }
        });
        let tmp = fish.shift();
        shark.x = tmp.x;
        shark.y = tmp.y;
        graph[shark.x][shark.y] = 0;
        shark.ex -= 1;
        if (shark.ex === 0) {
            shark.lv += 1;
            shark.ex = shark.lv;
        }
        answer += tmp.dis;
        bfs(shark.x, shark.y);
    }
}

if (fish.length === 0) {
    console.log(answer);
}
