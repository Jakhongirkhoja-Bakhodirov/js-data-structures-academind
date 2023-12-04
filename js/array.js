const names = ["Max", "Manu", "Julie", "Max"];

//Index starts at zero
console.log("first element of array", names[0]);
console.log("array length", names.length);

for (const el of names) {
  console.log(el);
}

names.push("Julie");

console.log(names.length);

const julieIndex = names.findIndex((el) => el === "Julie");

console.log(julieIndex);

names.splice(2, 1);

console.log(names);
