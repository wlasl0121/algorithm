let input = require("fs")
    .readFileSync("./백준/input.txt")
    .toString()
    .trim()
    .split("\n");

let [N, M] = input
    .shift()
    .split(" ")
    .map((v) => Number(v));
let lab = input.map((v) => {
    return v.split(" ").map((v) => Number(v));
});
let queue = [];
let max = -1;
for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
        if (lab[i][j] === 2) {
            queue.push([i, j]);
        }
    }
}
const bfs = (labArr, queue) => {
    let x = [-1, 0, 1, 0];
    let y = [0, -1, 0, 1];
    let cnt = 0;
    // let arr = [...labArr];
    let arr = labArr.map((v) => [...v]);
    let q = [...queue];

    while (q.length > 0) {
        let yx = q.shift();
        for (let i = 0; i < 4; i++) {
            let newX = yx[1] + x[i];
            let newY = yx[0] + y[i];
            if (newX < M && newX > -1 && newY < N && newY > -1) {
                if (arr[newY][newX] === 0) {
                    arr[newY][newX] = 2;
                    q.push([newY, newX]);
                }
            }
        }
    }

    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            if (arr[i][j] === 0) cnt++;
        }
    }

    max = Math.max(cnt, max);
};

const wall = (cnt) => {
    if (cnt === 3) {
        bfs(lab, queue);
        return;
    }
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            if (lab[i][j] === 0) {
                lab[i][j] = 1;
                wall(cnt + 1);
                lab[i][j] = 0;
            }
        }
    }
};
wall(0);
console.log(max);

/**
 * 회고록 :
 *  let arr = [...labArr]; 
    let arr = labArr.map((v) => [...v]);
    
    1차원 배열은 깊은복사가 스프레드 복사로 충분하지만,
    2차원 배열은 껍데기만 스프레드 복사가 되고 내부 원소들은 얕은 복사임
    2차원 배열은 스프레드 복사하는 "척"만 한 것
    2차원 배열 깊은 복사가 필요하면 map으로 [...v] 이런식으로 해줘야함.
 */
