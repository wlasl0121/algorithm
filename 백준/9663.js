let input = require("fs")
    .readFileSync("./백준/input.txt")
    .toString()
    .trim()
    .split("\n");
let N = Number(input.shift());

let arr = new Array(N).fill(-1);
let cnt = 0;

// arr=[0,0,0,0]
// arr[0]=[0][x]
// arr[1]=[1][x]
// arr[2]=[2][x]
// arr[3]=[3][x]

function check(idx) {
    for (let i = 0; i < idx; i++) {
        if (
            arr[idx] === arr[i] ||
            Math.abs(idx - i) === Math.abs(arr[idx] - arr[i])
        )
            return false;
    }
    return true;
    //arr[idx=0] = i=1
    //arr[0]=1
    //arr=[1,x,x,x]
    //[i][x] !== [j][x]
    //=> x끼리 같으면 안됨
    //[i][x1], [j][x2]
    // abs(i-j) !== abs(x1-x2)
}

function nQueen(idx) {
    // console.log(arr);
    if (idx === N) {
        // console.log(arr);
        cnt++;
        return;
    }

    for (let i = 0; i < N; i++) {
        arr[idx] = i;

        if (check(idx) === true) {
            nQueen(idx + 1);
        }
    }
}

nQueen(0);
console.log(cnt);

//TODO : 다시 풀어보기
