var input = require("fs")
    .readFileSync("./백준/input.txt")
    .toString()
    .trim()
    .split("\n");

var visited = Array.from(new Array(101), () => Array(101).fill(0));
var cnt = 0;
input.map((v) => {
    var [x1, y1, x2, y2] = v.split(" ").map(Number);

    for (var i = x1; i < x2; i++) {
        for (var j = y1; j < y2; j++) {
            if (visited[i][j] === 0) {
                cnt++;
                visited[i][j] = 1;
            }
        }
    }
});
console.log(cnt);
