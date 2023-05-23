let input = require("fs")
    .readFileSync("./백준/input.txt")
    .toString()
    .split("\n");

let N = Number(input[0]);
let arr = input[1].split(" ").map((v) => Number(v));

let set = new Set([...arr]);

let sort = [...set].sort((a, b) => {
    return a - b;
});

let dic = {};
sort.forEach((value, index) => {
    {
        dic[value] = index;
    }
});

let answer = [];
for (let i = 0; i < arr.length; i++) {
    answer.push(dic[arr[i]]);
}
console.log(answer.join(" "));
