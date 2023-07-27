var input = require("fs")
    .readFileSync("./백준/input.txt")
    .toString()
    .trim()
    .split("\n");
var n = Number(input.shift());

for (var i = 0; i < n; i++) {
    var str = input.shift().split(" ");
    var answer = "";

    str.map((v) => {
        answer += v.split("").reverse();
        answer += " ";
    });
    answer = answer.slice(0, -1);
    console.log(answer.replaceAll(",", ""));
}
