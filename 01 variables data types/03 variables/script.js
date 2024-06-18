// Ways to declare a variable
// var, let, const
let firstName = 'John';
let lastName = 'Smith';

console.log(firstName, lastName);

let age = 30;

console.log(age);

// Variable naming conventions
// Only letters, numbers, underscores and dollar signs
// Can't start with a number

// Multi-word formatting
// firstName = camelCase    ---   Usual
// first_name = underscore  ---    no no
// FirstName = PascalCase   ---   React Components
// firstname = lowercase    ---   no no

// Re-assigning Variables
age = 31;

console.log(age);

// let variable can be declared without value
let score;

score = 1;

console.log(score);

if (true) {
  score = score + 1;
}

console.log(score);

// const variable cannot be re-assigned or declared without value
const x = 100;

console.log(x);

//x = 200; wrong

//const score1; wrong

const arr = [1, 2, 3, 4];

console.log(arr);

// Cannot re-assign const arrays
// arr = [1,2,3,4,5]; wrong
// but you can push into an const array

arr.push(5);

// Same thing with objects,
// you cannot re-assign directly
// but you can change a property or a value of a key inside a variable without changing the variable itself
const person = {
  name: 'Brad',
};

console.log(person.name);

person.name = 'John';

console.log(person.name);
console.log(person.email);

// or add a new property
person.email = 'brad@gmail.com';

console.log(person.email);

// Declare multiple values at once
let a, b, c;

const d = 10,
  e = 20,
  f = 30;

console.log(d);
console.log(e);
console.log(f);
console.log(a, b, c);
