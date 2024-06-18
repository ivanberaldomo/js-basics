function sayHello() {
  console.log('Hello World!');
}

// calling a function
sayHello();

// define a function
function add(num1, num2) {
  console.log(num1 + num2);
}

// setting parameters
add(5, 10);

// returning a function - you return a value so you can do something with it
function subtract(num1, num2) {
  return num1 - num2;

  console.log("after the return you can't log anymore");
}

const result = subtract(10, 2);

console.log(result, subtract(20, 5));
