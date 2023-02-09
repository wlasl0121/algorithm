function solution(s) {
    var answer = -1;

    var stack = [];

    for (var i = 0; i < s.length; i++) {
        if (!stack.length || stack[stack.length - 1] !== s[i]) {
            stack.push(s[i]);
        } else {
            stack.pop();
        }

        stack.length > 0 ? (answer = 0) : (answer = 1);
    }

    return answer;
}
console.log(solution("baabaa"));
console.log(solution("cdcd"));

/**
 * TODO : 다시 풀어보기
 */
