let input = require("fs")
    .readFileSync("./백준/input.txt")
    .toString()
    .trim()
    .split("\n");

let [N, M, B] = input
    .shift()
    .split(" ")
    .map((v) => Number(v));

let ground = [];
input.map((v) => {
    ground.push(v.split(" ").map(Number));
});

// console.log(N, M, B);
// console.log(ground);

//제거 : 2초
//추가 : 1초
function flatten(h) {
    let time = 0;
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            if (ground[i][j] === h) continue;
            else if (ground[i][j] > h) time += (ground[i][j] - h) * 2;
            else time += h - ground[i][j];
        }
    }
    return [time, h];
}

let result = [Number.MAX_SAFE_INTEGER, 0]; //time, height;
let hasB = B;

for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
        hasB += ground[i][j];
    }
}
let maxB = Math.min(257, Math.floor(hasB / (N * M)) + 1);

for (let i = 0; i < maxB; i++) {
    [time, height] = flatten(i);
    if (time <= result[0]) {
        result[0] = time;
        if (height > result[1]) result[1] = height;
    }
}
console.log(result.join(" "));
