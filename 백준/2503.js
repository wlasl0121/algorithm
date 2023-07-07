var input = require("fs")
    .readFileSync("./백준/input.txt")
    .toString()
    .trim()
    .split("\n");
var n = Number(input.shift());

var arr = input.map((v) => {
    var [a, b, c] = v.split(" ");
    return [a, +b, +c];
});

var cnt = 0;

for (var i = 123; i <= 987; i++) {
    var str_i = i.toString();
    if (!check(str_i)) continue;

    var flag = true;

    for (var z = 0; z < arr.length; z++) {
        var strike = 0;
        var ball = 0;
        var split = arr[z][0].split("");

        if (split[0] === str_i[0]) strike++;
        if (split[1] === str_i[1]) strike++;
        if (split[2] === str_i[2]) strike++;
        if (split[0] === str_i[1] || split[0] === str_i[2]) ball++;
        if (split[1] === str_i[0] || split[1] === str_i[2]) ball++;
        if (split[2] === str_i[0] || split[2] === str_i[1]) ball++;

        if (arr[z][1] !== strike || arr[z][2] !== ball) {
            flag = false;
            break;
        }
    }
    if (flag) cnt++;
}

console.log(cnt);

function check(str) {
    var visited = new Array(11).fill(0);

    for (var i = 0; i < 3; i++) {
        visited[+str[i]] += 1;
    }

    if (visited[0] > 0) return false;

    for (var i = 1; i < 11; i++) {
        if (visited[i] > 1) return false;
    }

    return true;
}
