//한 줄 입력

function single() {
    let fs = require("fs");
    let input = fs.readFileSync("/dev/stdin").toString().split(" ");

    let num = Number(input);

    for (let i = 1; i <= num; i++) {
        console.log(i);
    }
}

//여러 줄 입력

function multie() {
    let fs = require("fs");
    let input = fs.readFileSync("/dev/stdin").toString().split("\n"); // 제출할때
    // let input = require('fs').readFileSync('예제.txt').toString().split('\n'); // 디버깅할때

    let count = input[0];
    let numbers = [];

    for (let i = 1; i < input.length; i++) {
        if (input[i] !== "") {
            numbers.push(input[i].split(" "));
        }
    }

    for (let i = 0; i < numbers.length; i++) {
        let num1 = Number(numbers[i][0]);
        let num2 = Number(numbers[i][1]);

        console.log(num1 + num2);
    }
}
