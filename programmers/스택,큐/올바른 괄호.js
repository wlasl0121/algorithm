function solution(s) {
    var stack = [];

    if (s[0] === ")") {
        return false;
    }

    for (var i = 0; i < s.length; i++) {
        if (s[i] === "(") {
            stack.push("(");
        } else if (s[i] === ")") {
            stack.pop();
        }
    }

    return stack.length ? false : true;
}

console.log(solution("()()"));
console.log(solution("(())()"));
console.log(solution(")()("));
console.log(solution("(()("));
