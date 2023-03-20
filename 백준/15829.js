let input = require("fs")
    .readFileSync("./백준/input.txt")
    .toString()
    .trim()
    .split("\n");

let L = Number(input.shift());
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
let sum = 0;
let r = 1;
for (let i = 0; i < L; i++) {
    let idx = alphabet.indexOf(str[i]);
    sum = sum + (((idx + 1) * r) % 1234567891);
    r *= 31;
    r %= 1234567891;
    sum %= 1234567891;
}
console.log(sum);
