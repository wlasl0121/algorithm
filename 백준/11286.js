let input = require("fs")
    .readFileSync("./백준/input.txt")
    .toString()
    .trim()
    .split("\n");

let N = Number(input.shift());
let arr = input.map((e) => Number(e));
let heap = []; //min heap //[key,value] //key값이 작은 순으로 정렬한다.
let answer = [];

arr.map((value) => {
    if (value === 0 && heap.length === 0) answer.push(0);
    else if (value === 0 && heap.length !== 0) {
        answer.push(remove());
    } else {
        insert(value);
    }
});
console.log(answer.join("\n"));

function insert(data) {
    heap.push([Number(Math.abs(data)), data]);

    let index = heap.length - 1;
    const element = heap[index];

    while (index > 0) {
        let parentIndex = Math.floor((index - 1) / 2);
        let parent = heap[parentIndex];

        if (
            element[0] > parent[0] ||
            (element[0] === parent[0] && element[1] > parent[1])
        )
            break;

        heap[parentIndex] = element;
        heap[index] = parent;
        index = parentIndex;
        // if (heap[parentIndex][0] === Number(Math.abs(data))) {
        //     if (heap[parentIndex][1] > data) {
        //         heap[index] = heap[parentIndex];
        //         index = parentIndex;
        //     } else break;
        // } else if (heap[parentIndex][0] > Number(Math.abs(data))) {
        //     heap[index] = heap[parentIndex];
        //     index = parentIndex;
        // } else break;
    }
    // heap[index] = [Number(Math.abs(data)), data];
}
function remove() {
    // const length = heap.length;
    const rootNode = heap[0];
    const end = heap.pop();
    if (heap.length > 0) {
        heap[0] = end;

        let idx = 0;
        const length = heap.length;
        const element = heap[idx];

        while (true) {
            let leftIdx = idx * 2 + 1;
            let rightIdx = idx * 2 + 2;
            let left, right;
            let swap = null;

            if (leftIdx < length) {
                left = heap[leftIdx];
                if (
                    left[0] < element[0] ||
                    (left[0] === element[0] && left[1] < element[1])
                ) {
                    swap = leftIdx;
                }
            }

            if (rightIdx < length) {
                right = heap[rightIdx];
                if (swap === null) {
                    if (
                        right[0] < element[0] ||
                        (right[0] === element[0] && right[1] < element[1])
                    ) {
                        swap = rightIdx;
                    }
                } else {
                    if (
                        right[0] < left[0] ||
                        (right[0] === left[0] && right[1] < left[1])
                    ) {
                        swap = rightIdx;
                    }
                }
            }
            if (swap === null) break;
            heap[idx] = heap[swap];
            heap[swap] = element;
            idx = swap;
        }
    }

    return rootNode[1];

    // if (length <= 0) return 0;
    // if (length === 1) {
    //     heap = [];
    // } else if (length > 1) {
    //     let index = 0;
    //     let root = heap.pop();
    //     heap[index] = root;
    //     let size = heap.length;

    //     while (index * 2 + 1 < size) {
    //         let left = index * 2 + 1;
    //         let right = index * 2 + 2;
    //         let small =
    //             right < size && heap[left][0] > heap[right][0] ? right : left;

    //         if (root[0] === heap[small][0]) {
    //             if (root[1] > heap[small][1]) {
    //                 heap[index] = heap[small];
    //                 index = small;
    //             } else break;
    //         } else if (root[0] > heap[small][0]) {
    //             heap[index] = heap[small];
    //             index = small;
    //         } else break;
    //     }
    //     heap[index] = root;
    // }
    // return rootNode[1];
}
