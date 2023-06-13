let [input] = require("fs")
    .readFileSync("./백준/input.txt")
    .toString()
    .trim()
    .split("\n");

let answer = "";
let word = "";
let tag = false;

for (let i = 0; i < input.length; i++) {
    if (input[i] === " ") {
        if (!tag) {
            answer += word.split("").reverse().join("") + input[i];
            word = "";
        } else if (tag) {
            word += input[i];
        }
    } else if (input[i] === "<") {
        if (word.length > 0) {
            answer += word.split("").reverse().join("");
            word = "";
        }
        tag = true;
        word += input[i];
    } else if (input[i] === ">") {
        tag = false;
        answer += word.split("").join("") + input[i];
        word = "";
    } else {
        word += input[i];
    }
}
if (word.length > 0) {
    answer += word.split("").reverse().join("");
}
console.log(answer);
