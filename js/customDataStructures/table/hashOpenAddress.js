class HashTable {
  constructor() {
    this.size = 50;
    this.buckets = new Array(this.size).fill(null);
  }

  hash(key) {
    let keyHash = 0;
    for (let char of key) {
      keyHash += char.charCodeAt(0);
    }
    return keyHash % this.size;
  }

  set(key, value) {
    let keyHash = this.hash(key);
    if (this.buckets[keyHash] === null) {
      this.buckets[keyHash] = { key, value };
    } else {
      while (this.buckets[keyHash] !== null) {
        keyHash++;
        if (keyHash > this.size) {
          keyHash = 0;
        }
      }
      this.buckets[keyHash] = { key, value };
    }
  }

  get(key) {
    const keyHash = this.hash(key);
    for (let i = keyHash; i < this.buckets.length; i++) {
      if (!this.buckets[i]) {
        continue;
      }
      if (this.buckets[i].key === key) {
        return this.buckets[i].value;
      }
    }
    return undefined;
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

console.log(table.buckets);
