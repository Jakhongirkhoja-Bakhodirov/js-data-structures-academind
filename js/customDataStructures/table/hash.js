class HashTable {
  constructor() {
    this.size = 10;
    this.buckets = Array(10)
      .fill(null)
      .map(() => []);
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
    const bucketArray = this.buckets[keyHash];
    const storedElement = bucketArray.find((element) => {
      return element.key === key;
    });
    if (storedElement) {
      storedElement.val = value;
    } else {
      bucketArray.push({ key: key, val: value });
    }
  }

  get(key) {
    const keyHash = this.hash(key);
    const bucketArray = this.buckets[keyHash];
    const storedElement = bucketArray.find((element) => {
      return element.key === key;
    });
    return storedElement;
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

// table.showInfo();

const word = "academind";

function findFirstReplicateCharacter(str) {
  const table = new HashTable();
  for (const char of str) {
    if (table.get(char)) {
      return char;
    }
    table.set(char, 1);
  }
}

//Time Complexity is O(n)

console.log(findFirstReplicateCharacter(word));


console.log(table.get('d'));