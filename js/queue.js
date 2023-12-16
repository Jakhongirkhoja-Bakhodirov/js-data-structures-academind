class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(value) {
    this.items.unshift(value);
  }

  dequeue() {
    this.items.pop();
  }

  isEmpty() {
    return this.items.length === 0;
  }

  toArray() {
    return this.items.slice();
  }
}

const queue = new Queue();

queue.enqueue("Cashbox llc");
queue.enqueue("Avtech llc");
queue.enqueue("IT Med llc");
queue.enqueue("BP");

console.log(queue.toArray());

queue.dequeue();
queue.dequeue();
queue.dequeue();

console.log(queue);
