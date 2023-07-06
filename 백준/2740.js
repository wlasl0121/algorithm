var input = require("fs")
    .readFileSync("./백준/input.txt")
    .toString()
    .trim()
    .split("\n");

var [N, M] = input.shift().split(" ").map(Number);

var a = [];

for (var i = 0; i < N; i++) {
    a.push(input.shift().split(" ").map(Number));
}

var [temp, K] = input.shift().split(" ").map(Number);

var b = [];

for (var i = 0; i < M; i++) {
    b.push(input.shift().split(" ").map(Number));
}
// console.log(a);
// console.log(b);

var answer = Array.from(new Array(N), () => Array(K).fill(0));

for (var i = 0; i < N; i++) {
    for (var j = 0; j < K; j++) {
        var sum = 0;
        for (var m = 0; m < M; m++) {
            sum += a[i][m] * b[m][j];
        }
        answer[i][j] = sum;
    }
}
console.log(answer.join("\n").replaceAll(",", " "));
