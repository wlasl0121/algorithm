let [N] = require("fs").readFileSync("./백준/input.txt").toString().split("\n");
// console.log(N.length);

let len = 0;
for (let i = 1; i < N.length; i++) {
    len += i * 10 ** (i - 1) * 9;
    // console.log(i * 10 ** (i - 1) * 9);
}
len += (Number(N) + 1 - 10 ** (N.length - 1)) * N.length;
console.log(len);
