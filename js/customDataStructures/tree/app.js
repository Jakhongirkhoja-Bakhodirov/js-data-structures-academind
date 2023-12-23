class Node {
  constructor(value, parentNode = null) {
    this.parent = parentNode;
    this.value = value;
    this.children = [];
  }

  addNode(value) {
    const node = new Node(value, this);
    this.children.push(node);
    return { node: node, index: this.children.length - 1 };
  }

  removeNode(index) {
    this.children.splice(index, 1);
  }
}

class Tree {
  constructor(rootValue) {
    this.root = new Node(rootValue);
  }
}

const fileSystem = new Tree("/");

// console.log(fileSystem.root);

const documentsNodeData = fileSystem.root.addNode("/documents");
const gamesNodeData = fileSystem.root.addNode("/games");

documentsNodeData.node.addNode("file.txt");
gamesNodeData.node.addNode("code.exe");

console.log(fileSystem);
