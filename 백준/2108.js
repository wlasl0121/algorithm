var input = require("fs")
    .readFileSync("./백준/input.txt")
    .toString()
    .trim()
    .split("\n");

var N = Number(input[0]);
var arr = [];

var total = 0;
input.reduce((_, cur) => {
    arr.push(Number(cur));
    total += Number(cur);
});
arr.sort((a, b) => {
    return a - b;
});

//1. 평균
if (Math.round(total / N) === -0) {
    console.log(0);
} else {
    console.log(Math.round(total / N));
}

//2. 중앙값
var centerIndex = Math.round((N - 1) / 2);
console.log(arr[centerIndex]);

//3. 최빈값

var obj = new Map();
var max = 1;

arr.map((value) => {
    obj.has(value)
        ? ((max = Math.max(max, obj.get(value) + 1)),
          obj.set(value, obj.get(value) + 1))
        : obj.set(value, 1);
});

var maxArr = [];
for (let [key, value] of obj) {
    if (value === max) maxArr.push(key);
}
if (maxArr.length > 1) {
    console.log(maxArr[1]);
} else {
    console.log(maxArr[0]);
}

//4. 최댓값과 최솟값의 차이
var max = Math.max.apply(null, arr);
var min = Math.min.apply(null, arr);
console.log(max - min);

/**
 * 1. 평균
 * 2. 중앙값
 * 3. 가장 많이 나타나는 값 // 여러개있으면 그 중 두번째로 작은 값 출력
 * 4. 최댓값과 최솟값의 차이
 */
