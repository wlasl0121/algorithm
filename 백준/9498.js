let input = require("fs")
    .readFileSync("./백준/input.txt")
    .toString()
    .trim()
    .split("\n");

let N = Number(input);

if (100 >= N && 90 <= N) {
    console.log("A");
} else if (90 > N && 80 <= N) {
    console.log("B");
} else if (80 > N && 70 <= N) {
    console.log("C");
} else if (70 > N && 60 <= N) {
    console.log("D");
} else {
    console.log("F");
}
