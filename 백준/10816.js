const input = require("fs")
    .readFileSync("./백준/input.txt")
    .toString()
    .trim()
    .split("\n");

const [N, M] = [input[0], input[2]];
const n_arr = input[1].split(" ").map(Number);
const m_arr = input[3].split(" ").map(Number);

const nMap = new Map();

n_arr.map((value) => {
    if (nMap.has(value)) {
        nMap.set(value, nMap.get(value) + 1);
    } else {
        nMap.set(value, 1);
    }
});

const answer = [];
m_arr.map((value) => {
    if (nMap.has(value)) {
        answer.push(nMap.get(value));
    } else {
        answer.push(0);
    }
});

console.log(answer.join(" "));

/**
 * 회고록 :
 * binary_search 함수를 만들어서 배열로 하면 메모리초과가 나옴
 * Set으로 하려고 했으나 중복되는 값은 허락하지 않아서 쓰지 못했음
 * Map 객체를 이런 상황에 활용할 수 있다는 점을 알게됨...
 */
