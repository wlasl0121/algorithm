function solution(price, money, count) {
    var answer = -1;
    var necessity = 0;

    for (var i = 1; i <= count; i++) {
        necessity += price * i;
    }
    answer = necessity - money;
    if (answer < 0) {
        answer = 0;
    }

    return answer;
}

console.log(solution(3, 20, 4));
