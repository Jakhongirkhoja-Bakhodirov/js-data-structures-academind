class LinkedList {
  constructor() {
    this.head = null; // First element of the list
    this.tail = null; // Last element of the list
  }

  append(value) {
    const newNode = { value: value, next: null };

    if (this.tail) {
      this.tail.next = newNode;
    }

    this.tail = newNode;
    if (!this.head) {
      this.head = newNode;
    }
  }

  toArray() {
    const elements = [];
    let currentNode = this.head;

    while (currentNode) {
      elements.push(currentNode);
      currentNode = currentNode.next;
    }
    return elements;
  }
}

const linkedList = new LinkedList();

linkedList.append(1);
linkedList.append("hello world");
linkedList.append({
  firstName: "Doe",
  lastName: "John",
});
linkedList.append([1, 23, 4, 5]);

console.log(linkedList.toArray());
