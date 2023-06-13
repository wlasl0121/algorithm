function solution(s) {
    var answer = [];

    var count = 0;
    var zero = 0;

    while (true) {
        if (s === "1") break;
        count++;
        zero += delZero(s);
        var len = s.replaceAll("0", "").length;
        s = len.toString(2);
    }
    answer.push(count);
    answer.push(zero);

    return answer;
}

function delZero(str) {
    var len = str.replaceAll("1", "").length;
    return len;
}

console.log(solution("110010101001"));
console.log(solution("01110"));
console.log(solution("1111111"));
