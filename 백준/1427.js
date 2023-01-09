var input = require("fs").readFileSync("./백준/input.txt").toString().trim();

var arr = [];
for (var i = 0; i < input.length; i++) {
    var n = Number(input[i]);
    arr[n] ? (arr[n] += 1) : (arr[n] = 1);
}

var str = [];
arr.map((value, index) => {
    if (value) {
        for (var i = 0; i < value; i++) {
            str.push(index);
        }
    }
});

str.sort((a, b) => {
    return b - a;
});
console.log(str.toString().replaceAll(",", ""));
