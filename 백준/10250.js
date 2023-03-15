let input = require("fs")
    .readFileSync("./백준/input.txt")
    .toString()
    .trim()
    .split("\n");

let T = Number(input.shift());
let arr = input.map((v) => {
    return v.split(" ").map((v) => Number(v));
});
//arr => [0]=H, [1]=W, [2]=N
let answer = [];

const roomCheck = (H, W, N) => {
    let room = 101;
    let cnt = 1;
    // console.log(Math.floor(room / 100)); //floor
    // console.log(room % 100); //No.room

    while (cnt < N) {
        if (Math.floor(room / 100) < H) {
            room += 100;
        } else if (Math.floor(room / 100) === H) {
            if (room % 100 < W) {
                room -= (H - 1) * 100;
                room += 1;
            } else {
                room += 100;
            }
        }
        cnt++;
        if (cnt === N) break;
    }
    return room;
};

for (let i = 0; i < T; i++) {
    answer.push(roomCheck(arr[i][0], arr[i][1], arr[i][2]));
}
console.log(answer.join("\n"));

// for (let i = 1; i < 100; i++) {
//     for (let j = 1; j < 100; j++) {
//         answer.push(roomCheck(i, j, 2));
//     }
// }
// console.log(answer.join("\n"));
