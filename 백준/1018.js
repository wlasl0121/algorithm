var input = require("fs")
    .readFileSync("./백준/input.txt")
    .toString()
    .trim()
    .split("\n");
var [M, N] = input
    .shift()
    .split(" ")
    .map((v) => parseInt(v));
var list = input.map((v) => {
    return v.split("");
});
var chessB = [
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
];
var chessW = [
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
];
var min = M * N;

for (var i = 0; i <= M - 8; i++) {
    for (var j = 0; j <= N - 8; j++) {
        min = check(j, i);
    }
}

console.log(min);

function check(x, y) {
    var cntW = 0;
    var cntB = 0;

    for (var i = y; i < y + 8; i++) {
        for (var j = x; j < x + 8; j++) {
            if (list[i][j] !== chessB[i - y][j - x]) {
                cntB++;
            }
            if (list[i][j] !== chessW[i - y][j - x]) {
                cntW++;
            }
        }
    }

    var m = 0;
    if (cntB > cntW) m = cntW;
    else if (cntB <= cntW) m = cntB;

    if (min > m) return m;
    else return min;
}
