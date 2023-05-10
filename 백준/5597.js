let input = require("fs")
    .readFileSync("백준/input.txt")
    .toString()
    .trim()
    .split("\n")
    .map((v) => Number(v));

// console.log(input);

input = input.sort((a, b) => {
    return a - b;
});
input.unshift(0);
// console.log(input);

let answer = [];
let j = 1;
for (let i = 1; i <= 30; i++) {
    if (input[j] !== i) {
        answer.push(i);
    } else {
        j++;
    }
    if (answer.length === 2) break;
}
console.log(answer.join("\n"));
