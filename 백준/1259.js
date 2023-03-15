let input = require("fs")
    .readFileSync("./백준/input.txt")
    .toString()
    .trim()
    .split("\n");

input.pop();
let numArr = input.map((v) => Number(v));
let answer = [];

const palinCheck = (str) => {
    let arr = str.split("");
    let stack = [];
    let answer = "yes";

    for (let i = 0; i < arr.length; i++) {
        if (i < Math.floor(arr.length / 2)) {
            stack.push(arr[i]);
        } else {
            if (arr.length % 2 !== 0 && Math.floor(arr.length / 2) === i)
                continue;
            if (stack.pop() !== arr[i]) answer = "no";
        }
    }
    return answer;
};

for (let i = 0; i < numArr.length; i++) {
    answer.push(palinCheck(numArr[i].toString()));
}
console.log(answer.join("\n"));
