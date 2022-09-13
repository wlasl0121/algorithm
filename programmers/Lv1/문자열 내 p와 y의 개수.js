function solution(s) {
    var answer = true;

    var pNum = 0;
    var yNum = 0;
    for (var i = 0; i < s.length; i++) {
        if (s[i] === "p" || s[i] === "P") pNum++;
        if (s[i] === "y" || s[i] === "Y") yNum++;
    }

    if (pNum === yNum) answer = true;
    else answer = false;

    return answer;
}

console.log(solution("pPoooyY"));
console.log(solution("Pyy"));
