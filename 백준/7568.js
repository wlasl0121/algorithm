var input = require("fs")
    .readFileSync("./백준/input.txt")
    .toString()
    .trim()
    .split("\n");
var N = Number(input.shift());
var list = [];
input.map((v) => {
    var str = v.split(" ");
    list.push([parseInt(str[0]), parseInt(str[1])]);
});

var answer = [];
for (var i = 0; i < N; i++) {
    var cnt = 1;
    for (var j = 0; j < N; j++) {
        if (i === j) continue;
        if (list[i][0] < list[j][0] && list[i][1] < list[j][1]) {
            cnt++;
        }
    }
    answer[i] = cnt;
}
console.log(answer.join(" "));

/**
 * 회고록 :
 * 브루트포스를 너무 복잡하게 생각하면 망하는것같다.
 * 내 생각보다 더 간단하게 생각할것...
 */
