function solution(s) {
    var answer = -1;
    var count = 0;

    for (let i = 0; i < s.length; i++) {
        count = checkStr(s) ? (count += 1) : count;
        s = rotation(s);
    }
    return count;
}

function rotation(str) {
    var arr = str.split("");
    arr.push(arr.shift());
    var s = arr.toString().replaceAll(",", "");
    return s;
}

function checkStr(str) {
    var stack = [];
    var answer = false;
    for (var i = 0; i < str.length; i++) {
        if (str[i] === "(" || str[i] === "{" || str[i] === "[") {
            stack.push(str[i]);
        } else if (str[i] === ")" || str[i] === "}" || str[i] === "]") {
            if (stack.length <= 0) {
                answer = false;
                return answer;
            }
            var s = stack[stack.length - 1];
            if (s === "(" && str[i] === ")") {
                stack.pop();
            } else if (s === "[" && str[i] === "]") {
                stack.pop();
            } else if (s === "{" && str[i] === "}") {
                stack.pop();
            }
        }
    }
    if (stack.length === 0) {
        answer = true;
    }
    return answer;
}

console.log(solution("[](){}"));
console.log(solution("}]()[{"));
console.log(solution("[)(]"));
console.log(solution("}}}"));
