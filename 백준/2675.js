let input = require("fs")
    .readFileSync("./백준/input.txt")
    .toString()
    .trim()
    .split("\n");
let N = Number(input.shift());

let str = [];
input.map((v) => {
    let s = v.split(" ");
    str.push([Number(s[0]), s[1]]);
});

for (let i = 0; i < N; i++) {
    let createS = "";
    for (let j = 0; j < str[i][1].length; j++) {
        let temp = str[i][1];
        createS += temp[j].repeat(str[i][0]);
    }
    console.log(createS);
}
