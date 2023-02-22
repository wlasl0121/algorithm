let input = require("fs")
    .readFileSync("./백준/input.txt")
    .toString()
    .trim()
    .split("\n");

let [A, B] = input
    .shift()
    .split(" ")
    .map((v) => Number(v));

if (A < B) {
    console.log("<");
} else if (A > B) {
    console.log(">");
} else if (A === B) {
    console.log("==");
}
