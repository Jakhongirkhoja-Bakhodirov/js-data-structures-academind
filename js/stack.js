import { LinkedList } from "./linkedlist";

class Stack extends LinkedList {
  constructor() {
    this.list = new LinkedList();
  }

  push(value) {
    this.list.prepend(value);
  }

  pop() {
    
  }
}
