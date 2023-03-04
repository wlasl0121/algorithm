let input = require("fs")
    .readFileSync("./백준/input.txt")
    .toString()
    .trim()
    .split("\n");

let str = input.shift();
let alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
];
let answer = [];
for (let i = 0; i < alphabet.length; i++) {
    for (let j = 0; j < str.length; j++) {
        if (alphabet[i] === str[j]) {
            answer.push(j);
            break;
        }
        if (j === str.length - 1) {
            answer.push(-1);
        }
    }
}
console.log(answer.join(" "));
