let input = require("fs")
    .readFileSync("./백준/input.txt")
    .toString()
    .trim()
    .split("\n");

let [L, C] = input
    .shift()
    .split(" ")
    .map((v) => Number(v));
//L개의 조합을 만들어야함, C개의 알파벳이 주어짐
let arr = input.shift().split(" ");
let aeiou = ["a", "e", "i", "o", "u"];

arr.sort();

let tmp = [];
let answer = [];

const includeCheck = (str) => {
    let cnt = 0;
    aeiou.map((v) => {
        let result = str.includes(v);
        // console.log(result);
        if (!result) {
            cnt++;
        }
    });

    if (cnt === 5 || str.length - (5 - cnt) < 2) {
        return false;
    } else {
        return true;
    }
};
const backtrack = (idx) => {
    if (tmp.length === L) {
        if (includeCheck(tmp.toString().replaceAll(",", ""))) {
            answer.push(tmp.toString().replaceAll(",", ""));
        }
        return;
    }

    for (let i = idx; i < C; i++) {
        tmp.push(arr[i]);
        backtrack(i + 1);
        tmp.pop();
    }
};
backtrack(0);
console.log(answer.join("\n"));

require("fs").writeFileSync("./백준/output.txt", JSON.stringify(answer));
