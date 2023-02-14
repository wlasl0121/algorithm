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
        var parent = Math.floor((index - 1) / 2);

        if (heap[parent] < data) {
            heap[index] = heap[parent];
            index = parent;
        } else break;
    }
    heap[index] = data;
}

function remove() {
    var rootNode = heap[0];
    var size = heap.length;

    if (size === 0) return 0;
    if (size === 1) {
        heap = [];
    } else {
        heap[0] = heap.pop();
        var index = 0;
        var root = heap[index];

        while (index * 2 + 1 < size) {
            var left = index * 2 + 1;
            var right = index * 2 + 2;

            var large = right < size && heap[left] < heap[right] ? right : left;
            if (heap[large] >= root) {
                heap[index] = heap[large];
                index = large;
            } else break;
        }
        heap[index] = root;
    }
    return rootNode;
}
