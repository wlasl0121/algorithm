function solution(s) {
    var answer = 0;

    var numStr = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];

    answer = numStr.reduce((_, cur, idx) => {
        s = s.replaceAll(cur, idx);
        return s;
    }, 0);

    return Number(answer);
}

console.log(solution("one4seveneight"));
console.log(solution("1zerotwozero3"));
console.log(solution("23four5six7"));
console.log(solution("2three45sixseven"));
console.log(solution("123"));
