function solution(n) {
    var answer = 0;

    var arr = [];
    for (var i = 0; i < n.toString().length; i++) {
        arr[i] = Number(n.toString()[i]);
    }

    arr.sort(function (a, b) {
        return b - a;
    });
    answer = Number(arr.join(""));

    return answer;
}

console.log(solution(118372));
