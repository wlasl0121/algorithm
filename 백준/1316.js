let input = require("fs")
    .readFileSync("백준/input.txt")
    .toString()
    .trim()
    .split("\n");

let N = Number(input.shift());
let arr = input.map((v) => v);
console.log(arr);

let answer = arr.length;
let tmp = "";

arr.forEach((item) => {
    tmp = item[0];
    for (let i = 1; i < item.length; i++) {
        if (tmp.includes(item[i]) && item[i - 1] !== item[i]) {
            answer--;
            break;
        }
        tmp += item[i];
    }
});

console.log(answer);
