let n = Number(
    require("fs").readFileSync("백준/input.txt").toString().trim().split("\n")
);

let f = new Array(n + 1).fill(0);
let a = 0;
let b = 0;

fib(n);
fibonacci(n);

console.log(a, b);

function fib(n) {
    if (n === 1 || n === 2) {
        a++;
        return 1;
    } else return fib(n - 1) + fib(n - 2);
}

function fibonacci(n) {
    f[1] = 1;
    f[2] = 1;

    for (let i = 3; i <= n; i++) {
        f[i] = f[i - 1] + f[i - 2];
        b++;
    }
    return f[n];
}
