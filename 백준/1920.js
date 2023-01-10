// js의 set과 has을 사용
// const input = require("fs")
//     .readFileSync("./백준/input.txt")
//     .toString()
//     .trim()
//     .split("\n");

// const [N, A, M, B] = input.map((v) => v.split(" "));

// const array = new Set(A);

// const result = B.map((v) => (array.has(v) ? 1 : 0));

// console.log(result.join("\n"));

// Binary Search 함수 직접 짠 코드

var input = require("fs")
    .readFileSync("./백준/input.txt")
    .toString()
    .trim()
    .split("\n");

var N = Number(input[0]);
var M = Number(input[2]);

var n_arr = [];
var m_arr = [];

input[1].split(" ").map((value) => {
    n_arr.push(Number(value));
});

n_arr.sort((a, b) => {
    return a - b;
});

input[3].split(" ").map((value) => {
    m_arr.push(Number(value));
});

var answer = [];
for (var i = 0; i < M; i++) {
    binary_search(n_arr, m_arr[i], 0, N - 1);
}
console.log(answer.join("\n"));

function binary_search(arr, n, start, end) {
    if (start > end) {
        answer.push(0);
        return 0;
    }

    var mid = Math.floor((start + end) / 2);

    if (arr[mid] === n || arr[start] === n || arr[end] === n) {
        answer.push(1);
        return 1;
    }
    if (arr[mid] > n) {
        return binary_search(arr, n, start, mid - 1);
    } else if (arr[mid] < n) {
        return binary_search(arr, n, mid + 1, end);
    }
}

/***
 * 회고록 :
 * https://www.inflearn.com/questions/247074/%EC%A7%88%EB%AC%B8-%EC%9E%AC%EA%B7%80%ED%95%A8%EC%88%98-return-%EC%B0%A8%EC%9D%B4
 * 재귀에 return의 정확한 기능과 사용법을 몰라서 생긴 문제..
 */

/**
 * 
 * 
반례 : 

4                      
2147483647 10 -2147483640 0
6
0 -2147483640 10000000 0 2147483647 9 
    
1
1
0
1
1
0

27번 줄에 N-1 를  M-1로 넣어서 틀린 문제
 */
