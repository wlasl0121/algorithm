let input = require("fs")
    .readFileSync("./백준/input.txt")
    .toString()
    .split("\n");
let [n, m] = input
    .shift()
    .split(" ")
    .map((v) => Number(v));

let graph = input.map((v) => {
    return v.split(" ").map((v) => Number(v));
});

let hc = getHC(graph);
let house = hc.h;
let chick = hc.c;

let check = new Array(chick.length).fill(false);
let answer = Number.MAX_SAFE_INTEGER;

dfs(0, 0);
console.log(answer);

function getMinDistance() {
    let sum = 0;
    for (let i = 0; i < house.length; i++) {
        let [hx, hy] = house[i];
        let min = Number.MAX_SAFE_INTEGER;
        for (let j = 0; j < chick.length; j++) {
            if (check[j] === true) {
                let [cx, cy] = chick[j];
                min = Math.min(min, Math.abs(hx - cx) + Math.abs(hy - cy));
            }
        }
        sum += min;
    }

    return sum;
}

function dfs(idx, cnt) {
    if (cnt === m) {
        answer = Math.min(answer, getMinDistance());
        return;
    } else {
        for (let i = idx; i < chick.length; i++) {
            if (check[i] === true) continue;
            check[i] = true;
            dfs(i, cnt + 1);
            check[i] = false;
        }
    }
}

function getHC(graph) {
    let chick = [];
    let house = [];

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (graph[i][j] === 1) {
                house.push([i, j]);
            } else if (graph[i][j] === 2) {
                chick.push([i, j]);
            }
        }
    }

    return { h: house, c: chick };
}
