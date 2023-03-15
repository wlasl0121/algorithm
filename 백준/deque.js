class Deque {
    constructor() {
        this.arr = [];
        this.head = null;
        this.tail = null;
    }
    push_front(x) {
        if (this.head === null) {
            this.tail = x;
        }
        this.head = x;
        this.arr.unshift(x);
    }
    push_back(x) {
        if (this.tail === null) {
            this.head = x;
        }
        this.tail = x;
        this.arr.push(x);
    }
    pop_front() {
        if (this.head === null) {
            return -1;
        }
        let n = this.arr.shift();
        if (this.arr.length === 0) this.head = null;
        else this.head = this.arr[0];
        return n ? n : -1;
    }
    pop_back() {
        if (this.tail === null) {
            return -1;
        }
        let n = this.arr.pop();
        if (this.arr.length === 0) this.tail = null;
        else this.tail = this.arr[this.arr.length - 1];
        return n ? n : -1;
    }
    size() {
        return this.arr.length;
    }
    empty() {
        return this.arr.length === 0 ? 1 : 0;
    }
    front() {
        return this.head === null ? -1 : this.head;
    }
    back() {
        return this.tail === null ? -1 : this.tail;
    }
}

let input = require("fs")
    .readFileSync("./백준/input.txt")
    .toString()
    .trim()
    .split("\n");

let N = Number(input.shift());
let command = input.map((v) => {
    return [v.split(" ")[0], v.split(" ")[1] ? Number(v.split(" ")[1]) : ""];
});
let answer = [];
let deque = new Deque();
for (let i = 0; i < N; i++) {
    if (command[i][0] === "push_front") {
        deque.push_front(command[i][1]);
    } else if (command[i][0] === "push_back") {
        deque.push_back(command[i][1]);
    } else if (command[i][0] === "pop_front") {
        answer.push(deque.pop_front());
    } else if (command[i][0] === "pop_back") {
        answer.push(deque.pop_back());
    } else if (command[i][0] === "size") {
        answer.push(deque.size());
    } else if (command[i][0] === "empty") {
        answer.push(deque.empty());
    } else if (command[i][0] === "front") {
        answer.push(deque.front());
    } else if (command[i][0] === "back") {
        answer.push(deque.back());
    }
}
console.log(answer.join("\n"));

require("fs").writeFileSync("./백준/output.txt", JSON.stringify(answer));
