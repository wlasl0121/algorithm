var input = require("fs")
    .readFileSync("./백준/input.txt")
    .toString()
    .trim()
    .split("\n");

var [N, M] = input
    .shift()
    .split(" ")
    .map((v) => parseInt(v));

var list = input
    .shift()
    .split(" ")
    .map((v) => parseInt(v));
var distance = [M, M];
for (var i = 0; i < N; i++) {
    for (var j = 0; j < N; j++) {
        if (i === j) continue;
        for (var o = 0; o < N; o++) {
            if ((i === o) | (j === o)) continue;
            const sum = list[i] + list[j] + list[o];
            const diff = M - sum;
            if (diff >= 0 && distance[0] > diff) {
                distance = [diff, sum];
            }
        }
    }
}
console.log(distance[1]);
