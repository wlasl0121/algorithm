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
        if (heap.length === 0) {
            answer.push(0);
        } else if (heap.length > 0) {
            answer.push(heap[0]);
            remove();
        }
    } else if (value > 0) {
        insert(value);
    }
});

console.log(answer.join("\n"));

function insert(data) {
    heap.push(data);
    var index = heap.length - 1; //여기에 마지막에 넣은 데이터 있음

    while (index > 0) {
        var parent = Math.floor((index - 1) / 2);

        if (data > heap[parent]) {
            heap[index] = heap[parent];
            index = parent;
        } else break;
    }
    heap[index] = data;
}

function remove() {
    //root 삭제
    var index = 0;
    var size = heap.length;
    if (size === 1) {
        heap = [];
        return;
    }
    heap[0] = heap.pop(); //마지막에 있는 애를 꺼내서 0번자리에 넣어줌
    var root = heap[0];

    while (index * 2 + 1 < size) {
        var left = index * 2 + 1;
        var right = index * 2 + 2;

        var large = right < size && heap[left] < heap[right] ? right : left;

        if (root <= heap[large]) {
            heap[index] = heap[large];
            index = large;
        } else break;
    }
    heap[index] = root;
}

// arr.map((value) => {
//     if (value === 0) {
//         answer.push(remove());
//     } else if (value > 0) {
//         insert(value);
//     }
// });
// console.log(answer.join("\n"));

// function insert(data) {
//     heap.push(data);
//     var index = heap.length - 1;

//     while (index > 0) {
//         var parent = Math.floor((index - 1) / 2);

//         if (heap[parent] < data) {
//             heap[index] = heap[parent];
//             index = parent;
//         } else break;
//     }
//     heap[index] = data;
// }

// function remove() {
//     var rootNode = heap[0];
//     var size = heap.length;

//     if (size === 0) return 0;
//     if (size === 1) {
//         heap = [];
//     } else {
//         heap[0] = heap.pop();
//         var index = 0;
//         var root = heap[index];

//         while (index * 2 + 1 < size) {
//             var left = index * 2 + 1;
//             var right = index * 2 + 2;

//             var large = right < size && heap[left] < heap[right] ? right : left;
//             if (heap[large] >= root) {
//                 heap[index] = heap[large];
//                 index = large;
//             } else break;
//         }
//         heap[index] = root;
//     }
//     return rootNode;
// }

/**
 * 
 * input 
 * 29
1
8
3
14
13
2
7
12
4
10
6
5
11
9
0
0
0
0
0
0
0
0
0
0
0
0
0
0
0

output
14
13
12
11
10
9
8
7
6
5
4
3
2
1
0
 */
