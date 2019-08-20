// Let's get some practice writing a few objects for a new group of interns at a small business.

// ==== Challenge 1: Writing Objects ====
// HR needs some information on the new interns put into a database.  Given an id, email, first name, and gender. Create an object for each person in the company list:

// 1, mmelloy0@psu.edu, Mitzi, F
// 2, kdiben1@tinypic.com, Kennan, M
// 3, kmummery2@wikimedia.org, Keven, M
// 4, gmartinson3@illinois.edu, Gannie, M
// 5, adaine5@samsung.com, Antonietta, F

// Example format of an intern object: 1, examples@you.edu, Example, F
const example = {
  id: 0,
  name: "Example",
  email: "examples@you.edu",
  gender: "F"
};

// Write your intern objects here:
let students = `mmelloy0@psu.edu, Mitzi, F
kdiben1@tinypic.com, Kennan, M
kmummery2@wikimedia.org, Keven, M
gmartinson3@illinois.edu, Gannie, M
adaine5@samsung.com, Antonietta, F`
  .trim()
  .split("\n")
  .map(line => line.split(", "))
  .reduce((students, line, i) => {
    students = students || [];
    students.push({
      email: line[0],
      name: line[1],
      gender: line[2],
      id: i
    });
    return students;
  }, []);
let Mitzi, Kennan, Keven, Gannie, Antonietta;
students.forEach(student => {
  if (student.name === "Mitzi") Mitzi = student;
  if (student.name === "Kennan") Kennan = student;
  if (student.name === "Keven") Keven = student;
  if (student.name === "Gannie") Gannie = student;
  if (student.name === "Antonietta") Antonietta = student;
});
// ==== Challenge 2: Reading Object Data ====
// Once your objects are created, log out the following requests from HR into the console:

// Mitzi's name
console.log(Mitzi.name);

// Kennan's ID
console.log(Kennan.id);

// Keven's email
console.log(Keven.email);

// Gannie's name
console.log(Gannie.name);

// Antonietta's Gender
console.log(Antonietta.gender);

// ==== Challenge 3: Object Methods ====
// Give Kennan the ability to say "Hello, my name is Kennan!" Use the console.log provided as a hint.
Kennan.speak = () => `Hello, my name is ${Kennan.name}!`;
console.log(Kennan.speak());

// Antonietta loves math, give her the ability to multiply two numbers together and return the product. Use the console.log provided as a hint.
Antonietta.multiply = (num1, num2) =>
  `The product of those two numbers is ${num1 * num2}!`;
console.log(Antonietta.multiply(3, 4));

// === Great work! === Head over to the the arrays.js. You may come back and attempt the Stretch Challenge once you have completed the challenges in arrays.js and function-conversion.js.

// ==== Stretch Challenge: Nested Objects and the this keyword ====

// 1. Create a parent object with properties for name and age.  Make the name Susan and the age 70.
let parent = {
  name: "Susan",
  age: 70,
  speak: function() {
    return `My name is ${this.name}`;
  }
};
// 2. Nest a child object in the parent object with name and age as well.  The name will be George and the age will be 50.
parent.child = {
  name: "George",
  age: 50,
  speak: function() {
    return `My name is ${this.name}`;
  }
};
const { child } = parent;
// 3. Nest a grandchild object in the child object with properties for name and age.  The name will be Sam and the age will be 30
child.grandchild = {
  name: "Sam",
  age: 30,
  speak: function() {
    return `My name is ${this.name}`;
  }
};
const { grandchild } = child;
// 4. Give each of the objects the ability to speak their names using the this keyword.
const parentSpeak = grandchild.speak.bind(parent);
const childSpeak = child.speak.bind(child);
const grandchildSpeak = grandchild.speak.bind(grandchild);

// Log the parent object's name
console.log(parent.name);

// Log the child's age
console.log(child.age);

// Log the name and age of the grandchild
console.log(grandchild.name, " ", grandchild.age);

// Have the parent speak
console.log(parentSpeak());

// Have the child speak
console.log(childSpeak());

// Have the grandchild speak
console.log(grandchildSpeak());
