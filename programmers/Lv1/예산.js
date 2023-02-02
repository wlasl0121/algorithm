function solution(d, budget) {
    d.sort((a, b) => {
        return a - b;
    });

    var cnt = 0;
    for (var i = 0; i < d.length; i++) {
        budget = budget - d[i];
        if (budget >= 0) {
            cnt++;
        }
    }

    return cnt;
}

console.log(solution([1, 3, 2, 5, 4], 9));
console.log(solution([2, 2, 3, 3], 10));
