import { LinkedList } from "./linkedlist.js";

class Stack {
  constructor() {
    this.list = new LinkedList();
  }

  push(value) {
    this.list.prepend(value);
  }

  pop() {
    return this.list.deleteHead();
  }

  isEmpty() {
    return !this.list.head;
  }

  toArray() {
    return this.list.toArray();
  }
}

const stack = new Stack();

console.log("check is empty stack", stack.isEmpty());

stack.push("Add first element");
stack.push("Add second element");

stack.push("Data structures");

stack.push("LIFO (Last In First Out");

stack.pop();

console.log("check is empty stack", stack.isEmpty());

console.log("toArray", stack.toArray());
