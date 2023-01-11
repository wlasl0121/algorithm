const input = require("fs")
    .readFileSync("./백준/input.txt")
    .toString()
    .trim()
    .split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const arr = input.shift().split(" ").map(Number);

var answer_arr = [];
var answer = search(arr, M, 0, Math.max(...arr));

if (answer >= 0) {
    console.log(answer);
} else {
    console.log(Math.max(...answer_arr));
}

function search(arr, target, start, end) {
    if (start > end) return -1;

    const mid = Math.floor((start + end) / 2);

    var get = 0;
    arr.map((v) => {
        if (v - mid > 0) {
            get = get + (v - mid);
        }
    });

    if (get === target) {
        return mid;
    }
    if (target < get) {
        answer_arr.push(mid);
        return search(arr, target, mid + 1, end);
    } else if (target > get) {
        return search(arr, target, start, mid - 1);
    }
}
