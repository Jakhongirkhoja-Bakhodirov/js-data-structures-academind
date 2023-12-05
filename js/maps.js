const fruits = new Map([]);

const resultData = new Map();

resultData.set("average", 1.53);
resultData.set("lastResult", null);

const germany = { name: "Germany", population: 82 };
resultData.set(germany, 0.89);

for (const el of resultData) {
  console.log(el);
}

console.log("Map.get()", resultData.get(germany));

resultData.delete("lastResult");

resultData.clear();

console.log(resultData);
