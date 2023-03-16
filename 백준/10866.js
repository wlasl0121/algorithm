let input = require("fs")
    .readFileSync("./백준/input.txt")
    .toString()
    .trim()
    .split("\n");

let N = Number(input.shift());
let command = input.map((v) => {
    return [v.split(" ")[0], v.split(" ")[1] ? Number(v.split(" ")[1]) : ""];
});
let answer = [];
let arr = [];
for (let i = 0; i < N; i++) {
    if (command[i][0] === "push_front") {
        arr.unshift(command[i][1]);
    } else if (command[i][0] === "push_back") {
        arr.push(command[i][1]);
    } else if (command[i][0] === "pop_front") {
        if (arr.length > 0) {
            answer.push(arr.shift());
        } else {
            answer.push(-1);
        }
    } else if (command[i][0] === "pop_back") {
        if (arr.length > 0) {
            answer.push(arr.pop());
        } else {
            answer.push(-1);
        }
    } else if (command[i][0] === "size") {
        answer.push(arr.length);
    } else if (command[i][0] === "empty") {
        if (arr.length > 0) {
            answer.push(0);
        } else {
            answer.push(1);
        }
    } else if (command[i][0] === "front") {
        if (arr.length > 0) {
            answer.push(arr[0]);
        } else {
            answer.push(-1);
        }
    } else if (command[i][0] === "back") {
        if (arr.length > 0) {
            answer.push(arr[arr.length - 1]);
        } else {
            answer.push(-1);
        }
    }
}
console.log(answer.join("\n"));

require("fs").writeFileSync("./백준/output.txt", JSON.stringify(answer));
