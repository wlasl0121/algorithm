var input = require("fs")
    .readFileSync("./백준/input.txt")
    .toString()
    .split("\n");

var N = Number(input[0]);

var fn = new Array(91).fill(0);

console.log(f(N).toString());

function f(n) {
    if (n === 0) {
        fn[0] = 0;
        return fn[0];
    } else if (n === 1 || n === 2) {
        fn[n] = 1;
        return fn[n];
    }

    if (fn[n] !== 0) {
        return fn[n];
    }
    fn[n] = BigInt(f(n - 1)) + BigInt(f(n - 2));

    return fn[n];
}

/**
 * 회고록 :
 * 틀렸습니다가 뜨는 순간 f(90)같은 높은 수가 number범위 안에 속하지 못해서 틀리는건가? 라는 생각이 들었음
 * 예전에 암호화 숫자 범위를 Number 범위 안에 안들어가서 BigInt를 써본 기억이 있어서 그런듯
 * 그래서 BigInt로 바꿔서 사용해보니 맞았다...
 */
