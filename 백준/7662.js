class PriorityQueue {
    constructor(compare) {
        this.heap = [];
        this.compare = compare;
    }

    getLeftChildIdx(index) {
        return Math.floor(index * 2) + 1;
    }
    getRightChildIdx(index) {
        return Math.floor(index * 2) + 2;
    }
    getParentIdx(index) {
        return Math.floor((index - 1) / 2);
    }

    empty() {
        return this.heap.length === 0;
    }
    top() {
        return this.heap[0];
    }

    insert(value) {
        this.heap.push(value);
        this.bottomUp();
    }
    bottomUp() {
        let index = this.heap.length - 1;
        let lastNode = this.heap[index];
        // console.log(this.heap);
        // console.log(index);
        // console.log(lastNode);

        while (index > 0) {
            let parentIdx = this.getParentIdx(index);
            if (this.compare(this.heap[parentIdx], this.heap[index])) break;

            this.heap[index] = this.heap[parentIdx];
            index = parentIdx;

            // if (this.heap[parentIdx] > this.heap[index]) {
            //     this.heap[index] = this.heap[parentIdx];
            //     index = parentIdx;
            // } else break;
            this.heap[index] = lastNode;
        }
        this.heap[index] = lastNode;
        // console.log(this.heap);
    }
    remove() {
        let count = this.heap.length;
        let rootNode = this.heap[0];

        if (count <= 0) return -1;
        else if (count === 1) this.heap = [];
        else {
            this.heap[0] = this.heap.pop();
            this.topDown();
        }
        // console.log(this.heap);
    }
    topDown() {
        let index = 0;
        let count = this.heap.length;
        let rootNode = this.heap[index];

        while (this.getLeftChildIdx(index) < count) {
            let leftChildIdx = this.getLeftChildIdx(index);
            let rightChildIdx = this.getRightChildIdx(index);

            let targetIdx =
                rightChildIdx < count &&
                this.compare(this.heap[rightChildIdx], this.heap[leftChildIdx])
                    ? rightChildIdx
                    : leftChildIdx;
            if (this.compare(this.heap[index], this.heap[targetIdx])) break;
            this.heap[index] = this.heap[targetIdx];
            index = targetIdx;

            // if (this.heap[targetIdx] < this.heap[index]) {
            //     this.heap[index] = this.heap[targetIdx];
            //     index = targetIdx;
            // } else break;
        }
        this.heap[index] = rootNode;
    }
}

let input = require("fs")
    .readFileSync("./백준/input.txt")
    .toString()
    .split("\n");

let T = Number(input.splice(0, 1));

// console.log(T);
// console.log(input);
let answer = [];

for (let i = 0; i < T; i++) {
    let maxHeap = new PriorityQueue((a, b) => a > b);
    let minHeap = new PriorityQueue((a, b) => a < b);
    let vaild = {};

    let k = Number(input.splice(0, 1));
    // console.log(k);
    let arr = input.splice(0, k);
    arr.map((v) => {
        let [command, num] = v.split(" ");
        if (command === "I") {
            minHeap.insert(Number(num));
            maxHeap.insert(Number(num));

            if (vaild[+num]) {
                vaild[+num]++;
            } else {
                vaild[+num] = 1;
            }
        } else if (num === "1") {
            while (!maxHeap.empty()) {
                let item = maxHeap.top();
                maxHeap.remove();
                if (vaild[item] > 0) {
                    vaild[item]--;
                    break;
                }
            }
        } else if (num === "-1") {
            while (!minHeap.empty()) {
                let item = minHeap.top();
                minHeap.remove();

                if (vaild[item] > 0) {
                    vaild[item]--;
                    break;
                }
            }
        }
    });

    while (!maxHeap.empty() && vaild[maxHeap.top()] === 0) {
        maxHeap.remove();
    }
    while (!minHeap.empty() && vaild[minHeap.top()] === 0) {
        minHeap.remove();
    }

    if (minHeap.empty() && maxHeap.empty()) {
        answer.push("EMPTY");
    } else {
        answer.push(`${maxHeap.top()} ${minHeap.top()}`);
    }
}

console.log(answer.join("\n"));
