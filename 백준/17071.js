class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(data) {
        let node = new Node(data);
        if (this.head === null) {
            this.head = node;
        } else {
            this.tail.next = node;
        }
        this.tail = node;
        this.length++;
    }

    shift() {
        if (this.head === null) {
            return -1;
        }
        let data = this.head.data;
        this.head = this.head.next;
        this.length--;

        return data;
    }
}

let [K, N] = require("fs")
    .readFileSync("백준/input.txt")
    .toString()
    .trim()
    .split(" ")
    .map((v) => Number(v));

let answer = bfs(K, N);
console.log(answer);

function bfs(k, n) {
    if (k === n) {
        return 0;
    }

    let visited = Array.from(Array(2), () => Array(500001).fill(-1));
    let cnt = 1;
    let queue = new Queue();
    queue.push(k);
    visited[0][k] = 0;

    while (queue.length > 0) {
        n += cnt;

        let Length = queue.length;

        for (let i = 0; i < Length; i++) {
            let now = queue.shift();

            let next = [now + 1, now - 1, now * 2];

            for (let j = 0; j < 3; j++) {
                if (
                    next[j] >= 0 &&
                    next[j] <= 500000 &&
                    visited[cnt % 2][next[j]] === -1
                ) {
                    visited[cnt % 2][next[j]] = cnt;
                    if (next[j] === n) {
                        return cnt;
                    }
                    queue.push(next[j]);
                }
            }
        }

        if (n > 500000) {
            break;
        }
        if (visited[cnt % 2][n] !== -1) {
            return cnt;
        }
        cnt++;
    }

    return -1;
}
