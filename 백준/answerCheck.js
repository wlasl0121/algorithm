let input = require("fs")
    .readFileSync("./백준/output.txt")
    .toString()
    .trim()
    .split(",");

let str = require("fs")
    .readFileSync("./백준/answer.txt")
    .toString()
    .trim()
    .split("\n");
// console.log(str);

JSON.parse(input).map((v, index) => {
    // console.log(v);
    if (v.toString() !== str[index]) {
        // if (v !== str[index]) {
        console.log(index, " : 틀렸습니다");
        return;
    }
});
