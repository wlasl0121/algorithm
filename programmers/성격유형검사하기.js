function solution(survey, choices) {
    var answer = "";

    var obj = {
        R: 0,
        T: 0,
        C: 0,
        F: 0,
        J: 0,
        M: 0,
        A: 0,
        N: 0,
    };

    for (var i = 0; i < survey.length; i++) {
        var [left, right] = survey[i].split("");
        var score = choices[i] - 4;
        if (score < 0) {
            obj[left] += Math.abs(score);
        } else if (score > 0) {
            obj[right] += Math.abs(score);
        }
    }
    for (var i = 0; i < 8; i += 2) {
        var types = Object.keys(obj);
        if (obj[types[i]] >= obj[types[i + 1]]) {
            answer += types[i];
        } else {
            answer += types[i + 1];
        }
    }

    return answer;
}

console.log(solution(["AN", "CF", "MJ", "RT", "NA"], [5, 3, 2, 7, 5]));
console.log(solution(["TR", "RT", "TR"], [7, 1, 3]));
