var input = require("fs")
    .readFileSync("./백준/input.txt")
    .toString()
    .trim()
    .split("\n");
var T = Number(input.shift());
var K = [];
var N = [];
for (let i = 0; i < T * 2; i = i + 2) {
    K.push(Number(input[i]));
    N.push(Number(input[i + 1]));
}

var kmax = Math.max(...K); //층
var nmax = Math.max(...N); //호 (+1);
var arr = new Array(kmax + 1).fill(0).map(() => new Array(nmax).fill(0));

for (var i = 0; i <= kmax; i++) {
    for (var j = 0; j < nmax; j++) {
        if (i === 0) {
            arr[i][j] = j + 1;
        } else if (j === 0) {
            arr[i][j] = 1;
        } else {
            arr[i][j] = arr[i - 1][j] + arr[i][j - 1];
        }
    }
}
for (var i = 0; i < T; i++) {
    console.log(arr[K[i]][N[i] - 1]);
}

/**
 * 회고록 :
 * 입력을 받아올때 input.shift()로 받아오니까
 * 15번째부터 받아오지 못하는 현상이 생겼음
 */
