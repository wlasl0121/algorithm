var [input] = require("fs")
    .readFileSync("./백준/input.txt")
    .toString()
    .trim()
    .split("\n");

function solution(input) {
    var str = input.split("");
    var stack = [];

    if (!check(str)) {
        return 0;
    }

    for (var i = 0; i < str.length; i++) {
        var top = stack[stack.length - 1];

        if (str[i] === "(" || str[i] === "[") {
            stack.push(str[i]);
        } else if (str[i] === ")" || str[i] === "]") {
            var reverse = str[i] === ")" ? "(" : "[";
            var point = reverse === "(" ? 2 : 3;

            if (top === reverse) {
                stack.pop();
                stack.push(point);
            } else {
                var temp = 0;
                while (1) {
                    var pop = stack.pop();
                    if (typeof pop === "number") {
                        temp += pop;
                    } else if (pop === reverse) {
                        stack.push(temp * point);
                        break;
                    }
                }
            }
        }
    }

    return stack.reduce((acc, cur) => acc + cur);
}

function check(input) {
    var stack = [];

    for (var i = 0; i < input.length; i++) {
        var top = stack[stack.length - 1];

        if (input[i] === "]" && top === "[") {
            stack.pop();
        } else if (input[i] === ")" && top === "(") {
            stack.pop();
        } else {
            stack.push(input[i]);
        }
    }

    return stack.length ? false : true;
}

const answer = solution(input);
console.log(answer);
