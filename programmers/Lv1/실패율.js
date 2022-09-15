function solution(N, stages) {
    var answer = [];

    var per = [{ num: Number, idx: Number }];
    for (var i = 1; i <= N; i++) {
        per[i] = {
            num:
                stages.filter((e) => e === i).length /
                stages.filter((e) => e >= i).length,
            idx: i,
        };
    }

    per = per.sort(function (a, b) {
        if (a.num < b.num) return 1;
        if (a.num > b.num) return -1;
        if (a.num === b.num) return 0;
    });

    for (var i = 1; i <= N; i++) {
        answer[i - 1] = per[i].idx;
    }

    return answer;
}

console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3])); //[3,4,2,1,5]
console.log(solution(4, [4, 4, 4, 4, 4])); //[4,1,2,3]
