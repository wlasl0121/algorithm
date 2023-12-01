function solution(s) {
    var answer = 0;
    var x = "";
    var t = 0;
    var f = 0;

    for (let i = 0; i < s.length; i++) {
        if (!x) x = s[i];
        if (x === s[i]) {
            t++;
        } else {
            f++;
        }
        if (t === f) {
            answer++;
            t = 0;
            f = 0;
            x = "";
        }
    }
    if (x) answer++;

    return answer;
}

console.log(solution("banana"));
console.log(solution("abracadabra"));
console.log(solution("aaabbaccccabba"));
