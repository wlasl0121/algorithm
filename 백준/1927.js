// first, min heap practice
var input = require("fs")
    .readFileSync("./백준/input.txt")
    .toString()
    .trim()
    .split("\n");

var N = Number(input.shift());
var arr = input.map((e) => Number(e));
var heap = [];
var answer = [];

arr.map((value) => {
    if (value === 0) {
        answer.push(remove());
    } else if (value > 0) {
        insert(value);
    }
});

console.log(answer.join("\n"));

function insert(data) {
    heap.push(data);
    var index = heap.length - 1;

    while (index > 0) {
        var parentIndex = Math.floor((index - 1) / 2);

        if (heap[parentIndex] > data) {
            heap[index] = heap[parentIndex];
            index = parentIndex;
        } else {
            break;
        }
    }
    heap[index] = data;
}
function remove() {
    var size = heap.length;
    var rootNode = heap[0];

    if (size <= 0) return 0;
    if (size === 1) {
        heap = [];
    } else {
        heap[0] = heap.pop();

        var index = 0;
        var root = heap[index];

        while (index * 2 + 1 < size) {
            var left = index * 2 + 1;
            var right = index * 2 + 2;
            var small = right < size && heap[left] > heap[right] ? right : left;

            if (heap[small] <= root) {
                heap[index] = heap[small];
                index = small;
            } else break;
        }
        heap[index] = root;
    }

    return rootNode;
}

/**
 * TODO : 다시 풀어보기
 * var parentIndex = Math.floor((index - 1) / 2);
 * 이 부분을 잘못 사용해서 틀린결과가 계속 나왔었음
 */
