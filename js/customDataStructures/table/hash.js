class HashTable {
  constructor() {
    this.size = 1000;
    this.buckets = Array(1000).fill(null);
  }

  hash(key) {
    let hash = 0;
    for (const char of key) {
      hash += char.charCodeAt(0);
    }
    return hash % this.size;
  }

  set(key, value) {
    const keyHash = this.hash(key);
    this.buckets[keyHash] = value;
  }

  get(key) {
    const keyHash = this.hash(key);
    return this.buckets[keyHash];
  }

  showInfo() {
    for (const key in this.buckets) {
      if (this.buckets[key] !== null) {
        console.log(key, this.buckets[key]);
      }
    }
  }
}

const table = new HashTable();

for (const char of "academind") {
  table.set(char, char);
}

for (const char of "hello") {
  table.set(char, char);
}

for (const char of "c++ data structures") {
  table.set(char, char);
}

table.showInfo();

// const word = "academind";

// function findFirstReplicateCharacter(str) {
//   const table = new HashTable();
//   for (const char of str) {
//     if (table.get(char)) {
//       return char;
//     }
//     table.set(char, 1);
//   }
// }

// //Time Complexity is O(n)

// console.log(findFirstReplicateCharacter(word));
