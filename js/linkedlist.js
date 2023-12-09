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

  prepend(value) {
    const newNode = { value: value, next: this.head };

    this.head = newNode;

    if (!this.tail) {
      this.tail = newNode;
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

  delete(value) {
    if (!this.head) {
      return null;
    }

    while (
      (this.head && this.head.value === value) ||
      JSON.stringify(this.head.value) === JSON.stringify(value)
    ) {
      this.head = this.head.next;
    }

    let currentNode = this.head;

    while (currentNode.next) {
      if (currentNode.next.value === value) {
        currentNode.next = currentNode.next.next;
      } else if (
        typeof currentNode.next.value === "object" &&
        JSON.stringify(currentNode.next.value) == JSON.stringify(value)
      ) {
        currentNode.next = currentNode.next.next;
      } else {
        currentNode = currentNode.next;
      }
    }

    if (
      this.tail.value === value ||
      JSON.stringify(this.head.value) === JSON.stringify(value)
    ) {
      this.tail = currentNode;
    }
  }
}

const linkedList = new LinkedList();

linkedList.append(1);
linkedList.append("hello world");
linkedList.append({
  firstName: "Doe",
  lastName: "John",
});
linkedList.append("last");
linkedList.prepend([1, 23, 4, 5]);
linkedList.prepend([1, 23, 4, 5]);

console.log(linkedList.toArray());

// linkedList.delete([1, 23, 4, 5]);
// linkedList.delete("hello world");
linkedList.delete({
  firstName: "Doe",
  lastName: "John",
}); // delete object used JSON.stringfy() to compare objects
linkedList.delete("last"); // delete tail node

console.log(linkedList.toArray());

console.log("linkedList head ", linkedList.head);
console.log("linkedList tail ", linkedList.tail);
