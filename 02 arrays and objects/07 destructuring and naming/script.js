// theres no need to repeat the property and value/key name if they are the same

const firstName = 'John';
const lastName = 'Doe';
const age = 30;

// this
const person = {
  firstName,
  lastName,
  age,
};
// instead of this
// const person = {
//   firstName: firstName,
//   lastName: lastName,
//   age: age,
// };

console.log(person.age);

// Destructuring

const todo = {
  id: 1,
  title: 'Take out trash',
  user: {
    name: 'John',
  },
};

const {
  todoId,
  title,
  user: { name },
} = todo;

console.log(name);

// Destructure arrays
const numbers = [5, 10, 15, 20, 25];

const [first, second, ...rest] = numbers;

console.log(first, second, ...rest); // rest operator ... brings the leftover values of an array

