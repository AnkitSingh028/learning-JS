// Objects in JavaScript

// An object is a collection of key-value pairs.

// It represents real-world entities (like a user, car, etc.).

// ✅ Example:
const person = {
  name: "Ankit",
  age: 20,
  greet: function() {
    console.log("Hello!");
  }
};

person.greet(); // Hello!


// // Classes in JavaScript

// A class is a blueprint to create multiple objects.

// Introduced in ES6 (2015).

// ✅ Example:

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hi, I'm ${this.name}`);
  }
}

const user1 = new Person("Ankit", 20);
user1.greet();
