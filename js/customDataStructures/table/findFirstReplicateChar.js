const word = "academind";

function findFirstRep(str) {
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (str[i] === str[j]) {
        return str[i];
      }
    }
  }
}

//Time Complexity is O(n^2)

console.log(findFirstRep(word));

function findFirstReplicateCharacter(str) {
  const table = {};
  for (const char of str) {
    if (table[char]) {
      return char;
    }
    table[char] = 1;
  }
}

//Time Complexity is O(n)

console.log(findFirstReplicateCharacter(word));
