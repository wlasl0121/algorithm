//enqueue,dequeue,front,getQueue
class MinHeap {
    constructor() {
        this.heap = [];
    }
    getParentIndex(index) {
        return Math.floor((index - 1) / 2);
    }
    getLeftIndex(index) {
        return index * 2 + 1;
    }
    getRightIndex(index) {
        return index * 2 + 2;
    }
    enqueue(data) {
        this.heap.push(data);
        let index = this.heap.length - 1;

        while (index > 0) {
            let parent = this.getParentIndex(index);
            if (this.heap[parent] >= this.heap[index]) {
                this.heap[index] = this.heap[parent];
                this.heap[parent] = data;
                index = parent;
            } else break;
        }
    }
    dequeue() {
        let rootNode = this.heap[0];
        if (this.heap.length <= 0) {
            return 0;
        }
        if (this.heap.length === 1) {
            this.heap = [];
        } else {
            let index = 0;
            this.heap[0] = this.heap.pop();
            let root = this.heap[0];

            while (this.getLeftIndex(index) < this.heap.length) {
                let left = this.getLeftIndex(index);
                let right = this.getRightIndex(index);
                let small =
                    right < this.heap.length &&
                    this.heap[left] > this.heap[right]
                        ? right
                        : left;
                if (root >= this.heap[small]) {
                    this.heap[index] = this.heap[small];
                    index = small;
                } else break;
            }
            this.heap[index] = root;
        }
        return rootNode;
    }
    front() {
        return this.heap[0];
    }
    getQueue() {
        return this.heap;
    }
}

let heap = new MinHeap();
heap.enqueue(2);
heap.enqueue(3);
heap.enqueue(4);
heap.enqueue(1);
heap.enqueue(5);
console.log("getQueue");
console.log(heap.getQueue());
let min = heap.dequeue();
console.log(min);

console.log("getQueue");
console.log(heap.getQueue());

let min2 = heap.dequeue();
console.log(min2);

console.log("getQueue");
console.log(heap.getQueue());
