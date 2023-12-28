class Node {
  constructor(value, parentNode = null) {
    this.parent = parentNode;
    this.value = value;
    this.children = [];
  }

  addNode(value) {
    const segments = value.split("/");

    if (segments.length === 0) {
      return;
    }
    if (segments.length === 1) {
      const node = new Node(segments[0], this);
      this.children.push(node);
      return { node: node, index: this.children.length - 1 };
    }

    const existingChildNode = this.children.find(
      (child) => child.value === segments[0]
    );
    if (existingChildNode) {
      existingChildNode.addNode(segments.slice(1).join("/"));
    } else {
      const node = new Node(segments[0], this);
      node.addNode(segments.slice(1).join("/"));
      this.children.push(node);
      return { node: node, index: this.children.length - 1 };
    }
  }

  removeNode(value) {
    const segments = value.split("/");

    if (segments.length === 0) {
      return;
    }

    if (segments.length === 1) {
      const existingNodeIndex = this.children.findIndex(
        (child) => child.value === segments[0]
      );
      if (existingNodeIndex < 0) {
        throw new Error("Could not find matching value !");
      }
      this.children.splice(existingNodeIndex, 1);
    }

    if (segments.length > 1) {
      const existingChildNode = this.children.find(
        (child) => child.value === segments[0]
      );

      if (!existingChildNode) {
        throw new Error(
          "Could not find matching path! Path segment " + segments[0]
        );
      }

      existingChildNode.removeNode(segments.slice(1).join("/"));
    }
  }
}

class Tree {
  constructor(rootValue) {
    this.root = new Node(rootValue);
  }

  add(path) {
    this.root.addNode(path);
  }

  remove(path) {
    this.root.removeNode(path);
  }
}

const fileSystem = new Tree("/");

fileSystem.add("documents/personal/doc.txt");
fileSystem.add("documents/personal/image.jpg");
fileSystem.add("programming/php/index.php");
fileSystem.add("programming/js/app.js");
fileSystem.add("books/business/zero to one.pdf");

fileSystem.remove("documents/personal/doc.txt");
fileSystem.remove("documents/personal/image.jpg");
// fileSystem.remove("documents/personal/doc2.txt");

console.log(fileSystem);
