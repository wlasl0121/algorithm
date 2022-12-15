var fs = require("fs");
var input = fs.readFileSync("./백준/input.txt").toString();

var num = Number(input);

if (num < 3) {
    console.log(-1);
    return -1;
}

var kg_5 = -1;
var kg_3 = -1;
var result;

while (1) {
    if (kg_5 >= 1) {
        kg_5--;
    } else {
        kg_5 = Math.floor(num / 5);
    }

    result = num - 5 * kg_5;

    if (result < 3 && result !== 0) continue;

    kg_3 = Math.floor(result / 3);
    result = result - 3 * kg_3;
    if (result === 0) break;
    if (kg_5 === 0 && result < 3) {
        result = -1;
        break;
    }
}

if (result === 0) {
    console.log(kg_5 + kg_3);
} else if (result === -1) {
    console.log(-1);
}

// 반례 :
// 5000 -> 1000
// 4999 -> 1001
// 2 -> -1
