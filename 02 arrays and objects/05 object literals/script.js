// Object Literal - common data structure that holds key/property and value pairs
// ex:
// const person = {
// name: 'John Smith',
// age:30,
// location: 'New York'
// }
// in this example const, name and age are my keys/properties and 'John Smith', 30 and 'New York' are my values. by calling such keys/properties you also call the values

const person = {
  firstName: 'John', // string
  lastName: 'Smith', // string
  age: 30, // number
  isAlive: true, // boolean
  address: {
    // you can also add objects within objects
    street: '123 Boulevard',
    city: 'New York',
    state: 'NY',
  },
  // as well as arrays within objects too
  hobbies: ['music', 'sports'],
};

// syntaxes for calling properties
// x = person.firstName; - keys and property
// x = person['age']; - same
// x = person.address.state; - a property within an object within an object
// x = person.hobbies[index]; - an array within an object
// x = person.hobbies[0];

// you can change and add properties
// person.firstName = 'Johnny'
// person.isAlive = false;change
// person.hasChildren = false;

// you can also delete properties
// delete person.age

// creating functions within a property
person.greet = function () {
  console.log(`Hello Mr. ${this.lastName}, how may I be of use to you today?`);
};
// executing a function
person.greet();

x = person;

console.log(x);
