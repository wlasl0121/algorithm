let input = require("fs")
    .readFileSync("./백준/input.txt")
    .toString()
    .trim()
    .split("\n");

const N = Number(input.shift());
const numArr = input.map((e) => parseInt(e));
const arr = [...numArr];
arr.sort((a, b) => {
    return a - b;
});
const stack = [];
let answer = [];
let sign = [];

let i = 0; //i=numArr, j=arr;
let j = 0;
// console.log(numArr);
// console.log(arr);
while (i < N) {
    if (arr[j] > N || arr[j] < 1) break;
    stack.push(arr[j]);
    sign.push("+");
    // console.log(stack);
    // console.log(numArr[i], arr[j]);
    // console.log(i, j);
    if (numArr[i] === arr[j]) {
        while (numArr[i] === stack[stack.length - 1] && stack.length > 0) {
            // console.log("===");
            // console.log("num, stack : " + numArr[i], stack[stack.length - 1]);

            answer.push(stack.pop());
            sign.push("-");
            i++;
        }
        j++;
    } else {
        j++;
    }
    if (i >= N || j >= N) break;
}
if (JSON.stringify(numArr) === JSON.stringify(answer)) {
    console.log(sign.join("\n"));
} else {
    console.log("NO");
}
