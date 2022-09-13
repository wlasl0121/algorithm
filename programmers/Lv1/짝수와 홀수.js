function solution(num) {
    var answer = "";

    if (num % 2 === 0) {
        answer = "Even";
    } else {
        answer = "Odd";
    }

    return answer;
}

for (var i = 0; i <= 20; i++) {
    console.log(solution(i));
}
