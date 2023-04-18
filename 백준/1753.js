let input = require("fs")
    .readFileSync("백준/input.txt")
    .toString()
    .trim()
    .split("\n");

class MinHeap {
    constructor() {
        this.heap = [];
    }

    getLeftChildIndex(parentIndex) {
        return parentIndex * 2 + 1;
    }
    getRightChildIndex(parentIndex) {
        return parentIndex * 2 + 1;
    }
    getParentIndex(childIndex) {
        return Math.floor((childIndex - 1) / 2);
    }

    insert(value) {
        this.heap.push(value);
        this.moveUp();
    }

    moveUp() {
        let index = this.heap.length - 1;
        let data = this.heap[index];

        while (index > 0) {
            let parent = this.getParentIndex(index);

            if (this.heap[parent].weight >= data.weight) {
                this.heap[index] = this.heap[parent];
                index = parent;
            } else break;
        }
        this.heap[index] = data;
    }

    pop() {
        let rootNode = this.heap[0];
        if (this.heap.length <= 0) {
            return [];
        }

        if (this.heap.length === 1) {
            this.heap = [];
            return rootNode;
        }
        this.heap[0] = this.heap.pop(); // 맨밑 노드를 루트노드로 올림

        this.moveDown();
        return rootNode;
    }
    moveDown() {
        let index = 0;
        let root = this.heap[0];

        while (this.getLeftChildIndex(index) < this.heap.length) {
            let left = this.getLeftChildIndex(index);
            let right = this.getRightChildIndex(index);
            let small =
                right < this.heap.length &&
                this.heap[left].weight > this.heap[right].weight
                    ? right
                    : left;
            if (root.weight >= this.heap[small].weight) {
                this.heap[index] = this.heap[small];
                index = small;
            } else break;
        }
        this.heap[index] = root;
    }
}

function dijkstra(graph) {
    let distance = new Array(V + 1).fill(Infinity);
    distance[K] = 0;

    let minHeap = new MinHeap();
    minHeap.insert({ vertex: K, weight: 0 });

    while (minHeap.heap.length) {
        let now = minHeap.pop();
        let start = now.vertex;
        let weight = now.weight;

        if (graph[start] === undefined) continue;
        if (distance[start] < weight) continue;

        for (let i = 0; i < graph[start].length; i++) {
            let node = graph[start][i];
            let nextVertex = node.vertex;
            let nextWeight = node.weight;

            if (distance[nextVertex] > weight + nextWeight) {
                distance[nextVertex] = weight + nextWeight;
                minHeap.insert({
                    vertex: nextVertex,
                    weight: distance[nextVertex],
                });
            }
        }
    }

    return distance;
}

let [V, E] = input
    .shift()
    .split(" ")
    .map((v) => Number(v));
let K = Number(input.shift());
let graph = Array.from(Array(V + 1), () => new Array());

input.map((v) => {
    let [start, end, weight] = v.split(" ").map((value) => Number(value));
    graph[start].push({
        vertex: end,
        weight: weight,
    });
});

let result = dijkstra(graph);
let answer = [];
for (let i = 1; i <= V; i++) {
    if (result[i] === Infinity) answer.push("INF");
    else answer.push(result[i]);
}
console.log(answer.join("\n"));
