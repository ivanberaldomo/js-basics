// Primitive data types

// string - sequence of characters - must be enclose in quotes "" or backticks ''
let firstName = 'John';
console.log(firstName, typeof firstName);

// number - integers as well as floating-point numbers
let integer1 = 10;
let integer2 = -5;
let integer3 = 1000;
let floatPoint1 = 3.14;
let floatPoint2 = 0.5;
let floatPoint3 = 2.71828;
console.log(
  integer1,
  integer2,
  integer3,
  floatPoint1,
  floatPoint2,
  floatPoint3
);

// boolean - logical entity / true or false
let trueOrFalse = true;
let FalseOrTrue = false;
console.log(trueOrFalse, typeof trueOrFalse, FalseOrTrue, typeof FalseOrTrue);

// null - intentional absence of any object value
// null is incorrectly show as an object type
let absence = null;
console.log(absence, typeof absence);

// undefined - a variable that has yet not been defined/assigned
let undef;
console.log(undef, typeof undef);

// symbol - built-in object whose constructor returns a unique symbol
const id = Symbol('id');
console.log(id, typeof id);

// BigInt - numbers that are greater than the "number" type can handle
let bigInteger = 1234567890123456789012345678901234567890n;
console.log(bigInteger, typeof bigInteger);

// bigInteger is a bigInt but integer4 is a number, remember to add an "n" to the end
let integer4 = 1234567890123456789012345678901234567890;
console.log(integer4, typeof integer4);

// Reference types (Objects)
// Reference types are a non-primitive value and when assigned to a variable, the variable is given a reference to that value.
// Object literals, arrays and functions are all reference types

let arr = [1, 2, 3, 4, 5];
console.log(arr, typeof arr);

let person = {
  name: 'John',
};

console.log(person, typeof person);

// Functions are still objects, but they are defined as function objects instead of just objects

function sayHello() {
  console.log('hello');
}

console.log(sayHello, typeof sayHello);

// Static Types vs Dynamic Types
// Dynamic type means variables types are not explicitly defined, like javascript
// C, C++ and Java are statically typed languages
// typescript(a superset of javascript) allows for static types
