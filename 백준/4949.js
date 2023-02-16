let input = require("fs")
    .readFileSync("./백준/input.txt")
    .toString()
    .trim()
    .split("\n");

for (str of input) {
    var stack = [];
    // console.log(str);
    if (str === ".") break;

    for (s of str) {
        if (s === ".") {
            break;
        } else if (s === "(" || s === "[") {
            stack.push(s);
        } else if (s === ")") {
            if (stack[stack.length - 1] === "(") {
                stack.pop();
            } else {
                stack.push(s);
            }
        } else if (s === "]") {
            if (stack[stack.length - 1] === "[") {
                stack.pop();
            } else {
                stack.push(s);
            }
        }
    }
    if (stack.length === 0) console.log("yes");
    else console.log("no");
}
