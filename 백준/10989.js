var input = require("fs")
    .readFileSync("./백준/input.txt")
    .toString()
    .trim()
    .split("\n");

var N = Number(input[0]);
var countArr = new Array(N).fill(0);

input.reduce((_, cur) => {
    countArr[Number(cur - 1)]++;
});

countArr.map((value, index) => {
    for (var i = 0; i < value; i++) {
        console.log(index + 1);
    }
});

/**
 * 이 문제는 계수정렬(counting sort)를 써서 풀 수 있는 문제이나,
 * 백준에서 node.js의 메모리를 늘려주지 않아
 * 성공 할 수 없는 문제였다...
 *
 */
