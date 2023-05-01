let str = require("fs").readFileSync("백준/input.txt").toString().trim();

let arr = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];
let cnt = 0;

while (str.length > 0) {
    let bool = true;
    for (let i = 0; i < arr.length; i++) {
        let split = str.substring(0, arr[i].length);
        if (arr[i] === split) {
            str = str.substring(split.length);
            cnt++;
            bool = true;
            break;
        } else {
            bool = false;
        }
    }
    if (!bool) {
        str = str.substring(1);
        cnt++;
    }
}

console.log(cnt);
