let input = require("fs")
    .readFileSync("백준/input.txt")
    .toString()
    .trim()
    .split("\n");

let [N, M] = input
    .shift()
    .split(" ")
    .map((v) => Number(v));
let poketmon = input.slice(0, N);
let question = input.slice(N);

let map = new Map(poketmon.map((poket, idx) => [poket, idx + 1]));

question.forEach((q) => {
    if (Number.isNaN(+q)) console.log(map.get(q));
    else console.log(poketmon[+q - 1]);
});
