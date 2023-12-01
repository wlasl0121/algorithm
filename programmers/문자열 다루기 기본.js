function solution(s) {
    return (
        s.replace(/\d/g, "").length === 0 && (s.length === 4 || s.length === 6)
    );
}

console.log(solution("a234"));
console.log(solution("1234"));
console.log(solution("12346"));
console.log(solution("1234a"));
console.log(solution("0x16"));
