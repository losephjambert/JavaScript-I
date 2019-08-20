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
