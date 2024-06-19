// Function declaration
// Only functions declarations are available before the code is run
// console.log(addDollarSign(100)); - works
function addDollarSign(value) {
  return '$' + value;
}

console.log(addDollarSign(100));

// Function expression
// console.log(addPlusSign(200)); - doesn't work
const addPlusSign = function (value) {
  return '+' + value;
};

console.log(addPlusSign(200));
