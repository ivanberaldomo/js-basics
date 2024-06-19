// function add(a, b) {
//     return a + b;
// }

// Arrow function syntax
const add = (a, b) => {
  return a + b;
};

// If your function has only a single return expression you can shorten the function further - Implicit return
const subtract = (a, b) => a - b;

// If your function has a single param you can shorten it even further - no need to have parenthesis
const double = (a) => a * 2; // const double = a => a * 2;

// Returning an object - surround the semi-colon with parenthesis ({ })
const createObj = () => ({
  name: 'John',
});

const numbers = [1, 2, 3, 4, 5];

// Arrow function in a callback - this
// numbers.forEach(function (n) {
//   console.log(n);
// });
// into this
numbers.forEach((n) => console.log(n));

console.log(add(1, 2));
console.log(subtract(10, 5));
console.log(double(10));
