let input = require("fs")
    .readFileSync("./백준/input.txt")
    .toString()
    .trim()
    .split("\n");
let n = Number(input.shift());
let k = Number(input.shift());
let apple = [];
let snake = [[0, 0]];

for (let i = 0; i < k; i++) {
    let [x, y] = input.shift().split(" ").map(Number);
    apple.push([x - 1, y - 1]);
}

let l = Number(input.shift());
let move = [];

for (let i = 0; i < l; i++) {
    let [x, c] = input.shift().split(" ");
    move.push([Number(x), c]);
}

let cnt = 0;
let time = 0;
let dx = [-1, 0, 1, 0];
let dy = [0, 1, 0, -1];
let dir = 1;

while (true) {
    let [t, c] = move[cnt];
    if (time === t) {
        if (c === "D") {
            dir = (dir + 1) % 4;
        } else {
            dir = dir === 0 ? 3 : (dir - 1) % 4;
        }
        if (cnt < l - 1) cnt++;
    }

    time++;

    let [x, y] = snake[snake.length - 1];
    let nx = x + dx[dir];
    let ny = y + dy[dir];

    if (
        nx < 0 ||
        ny < 0 ||
        nx >= n ||
        ny >= n ||
        snake.find((v) => v[0] === nx && v[1] === ny)
    ) {
        console.log(time);
        break;
    }
    let idx = apple.findIndex((v) => v[0] === nx && v[1] === ny);
    if (idx !== -1) {
        apple.splice(idx, 1);
    } else {
        snake.shift();
    }

    snake.push([nx, ny]);
}
