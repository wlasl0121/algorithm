var input = require("fs")
    .readFileSync("./백준/input.txt")
    .toString()
    .trim()
    .split("\n");
var N = Number(input.shift());
var M = -1;
for (var i = 1; i <= N; i++) {
    var sum = i;
    const str = i.toString();
    for (var j = 0; j < str.length; j++) {
        sum = sum + Number(str[j]);
    }
    if (sum === N) {
        M = i;
        break;
    }
}
{
    M > 0 ? console.log(M) : console.log(0);
}
