import { LinkedList } from "./linkedlist.js";

class Queue {
  constructor() {
    this.items = new LinkedList();
  }

  enqueue(value) {
    this.items.append(value);
  }

  dequeue() {
    this.items.deleteHead();
  }

  toArray() {
    return this.items.toArray();
  }

  isEmpty() {
    return !this.items.head;
  }
}

const queue = new Queue();
console.log(queue.isEmpty());
queue.enqueue("Cashbox llc");
queue.enqueue("Avtech llc");
queue.enqueue("IT Med llc");
queue.enqueue("BP");
console.log(queue.toArray());
queue.dequeue();
queue.dequeue();
queue.dequeue();
console.log(queue.isEmpty());
