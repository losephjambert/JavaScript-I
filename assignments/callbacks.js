const counter = () => {
  // return a function that when invoked increments and returns a counter variable
  // Example: const newCounter = counter();
  // newCounter(); => 1
  // newCounter(); => 2

  // Closures allow us to hold onto memory like our own little computer

  let count = 0;
  return () => ++count;
};

const myCounter = counter();
console.log(myCounter());
console.log(myCounter());
console.log(myCounter());
console.log(myCounter());
console.log(myCounter());

const add = (n, m) => n + m;
const numbers = [1, 2, 3, 4, 5, 6];
console.log(numbers);
let added = numbers.map(number => add(number, number));
console.log(added);
