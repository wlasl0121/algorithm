var input = require("fs")
    .readFileSync("./백준/input.txt")
    .toString()
    .trim()
    .split("\n");

var arr = [];
input.reduce((_, cur) => {
    arr.push(Number(cur));
});

arr.sort((a, b) => {
    return a - b;
});
console.log(arr.join("\n"));

/**
 * 회고록 :
 * sort는 문제가 없었고,
 * for문으로 배열 하나씩 console.log로 출력하면
 * console.log가 느려서 시간 초과가 난다.
 * join('\n') 를 사용해서 출력....
 */
