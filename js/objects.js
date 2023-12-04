const person = {
  firstName: "John",
  age: 24,
  hobies: ["programming", "football"],
  greet() {
    console.log("I'm " + this.firstName);
  },
};

delete person.age;

console.log(person);

person.lastName = "Doe";

person.greet();
