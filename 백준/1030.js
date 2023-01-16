var input = require("fs")
    .readFileSync("./백준/input.txt")
    .toString()
    .split("\n");
var T = Number(input.shift());
var N = input.map(Number);

var max = Math.max(...N);

var fn = new Array(max + 1).fill(0);
var answer = [];

for (var i = 0; i < T; i++) {
    answer.push(`${f(N[i] - 1)} ${f(N[i])}`);
}
console.log(answer.join("\n"));

function f(n) {
    if (n === -1) {
        return 1;
    }
    if (n === 0) {
        fn[0] = 0;
        return fn[0];
    } else if (n === 1 || n === 2) {
        fn[n] = 1;
        return fn[n];
    }

    if (fn[n] !== 0) {
        return fn[n];
    }
    fn[n] = f(n - 1) + f(n - 2);

    return fn[n];
}

/**
 * 회고록 :
 * 테스트케이스를 제대로 확인 하지 않고 제출해서 틀렸습니다가 나옴
 * n = -1 일때를 체크하지 않아서 생긴 일...
 */
