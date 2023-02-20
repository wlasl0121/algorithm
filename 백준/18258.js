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
        if (!this.head) {
            this.head = node;
        } else {
            this.rear.next = node;
        }
        this.rear = node;
        this.length++;
    }
    dequeue() {
        if (!this.head) {
            return -1;
        }
        const node = this.head;
        this.head = this.head.next;
        this.length--;
        return node.data;
    }
    front() {
        if (!this.head) {
            return -1;
        } else {
            return this.head.data;
        }
    }
    back() {
        if (!this.rear || this.length === 0) {
            return -1;
        } else {
            return this.rear.data;
        }
    }
    size() {
        return this.length;
    }
    empty() {
        return this.length > 0 ? 0 : 1;
    }
}

let input = require("fs")
    .readFileSync("./백준/input.txt")
    .toString()
    .trim()
    .split("\n");
let N = Number(input.shift());

let command = input.map((value) => {
    return value.split(" ");
});
let queue = new Queue();
let answer = [];
for (let i = 0; i < N; i++) {
    if (command[i][0] === "push") {
        queue.enqueue(parseInt(command[i][1]));
    } else if (command[i][0] === "pop") {
        answer.push(queue.dequeue());
    } else if (command[i][0] === "front") {
        answer.push(queue.front());
    } else if (command[i][0] === "back") {
        answer.push(queue.back());
    } else if (command[i][0] === "size") {
        answer.push(queue.size());
    } else if (command[i][0] === "empty") {
        answer.push(queue.empty());
    }
}
console.log(answer.join("\n"));
