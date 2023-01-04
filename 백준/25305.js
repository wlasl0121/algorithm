var input = require("fs")
    .readFileSync("./백준/input.txt")
    .toString()
    .trim()
    .split("\n");

var N = Number(input[0].split(" ")[0]);
var k = Number(input[0].split(" ")[1]);

var str = input[1].split(" ");

var arr = [];
for (var i = 0; i < N; i++) {
    arr.push(Number(str[i]));
}

var sorting = arr.sort((a, b) => {
    return (a - b) * -1;
});

console.log(sorting[k - 1]);
