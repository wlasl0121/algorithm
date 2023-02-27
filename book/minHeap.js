class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
//enqueue,dequeue,front,getQueue
class MinHeap {
    constructor() {
        this.head = null;
        this.rear = null;
        this.length = 0;
    }
    enqueue(data) {
        //data push -> parent,node 비교 -> 자리 찾기
        let node = new Node(data);
        node.data = data;
        if (this.head === null) {
            this.head = node;
        } else {
        }
        this.rear = node;
        this.length++;
    }
    dequeue() {}
    front() {
        return this.head;
    }
    getQueue() {}
}
