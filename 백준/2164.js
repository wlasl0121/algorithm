class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.head = null;
        this.rear = null;
        this.length = 0;
    }

    enqueue(data) {
        const node = new Node(data);
        if (this.head === null) {
            this.head = node;
        } else {
            this.rear.next = node;
        }
        this.rear = node;
        this.length++;
    }

    dequeue() {
        if (this.head === null) {
            return false;
        }
        const data = this.head.data;
        this.head = this.head.next;
        this.length--;
        return data;
    }

    front() {
        return this.head ? this.head.data : false;
    }

    getQueue() {
        if (this.head === null) {
            return false;
        }
        let node = this.head;
        let arr = [];
        while (node) {
            arr.push(node.data);
            node = node.next;
        }
        return arr;
    }
}

let input = require("fs")
    .readFileSync("./백준/input.txt")
    .toString()
    .trim()
    .split("\n");

let N = Number(input);
if (N === 1) {
    console.log(1);
    return;
}
let queue = new Queue();
for (let i = 1; i <= N; i++) {
    queue.enqueue(i);
}

while (queue.length >= 1) {
    queue.dequeue();
    if (queue.length === 1) break;
    queue.enqueue(queue.dequeue());
}

console.log(queue.front());
