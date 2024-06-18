let x;

// creating objects
const todo = {};
// or
// const todo = new Object();
// custom constructor for new objects
// const todo1 = new todo();

todo.id = 1;
todo.name = 'drink coffee';
todo.completed = false;

x = todo;

console.log(x);

// nesting
const person = {
  address: {
    coords: {
      lat: 42.9384,
      lng: -71.3232,
    },
  },
};

x = person.address.coords.lat;

console.log(x);

// nesting 2 or more objects within an object
const obj1 = {
  a: 1,
  b: 2,
};
const obj2 = {
  c: 3,
  d: 4,
};

const obj3 = { obj1, obj2 };

x = obj3;

console.log(x);

// un-nesting with spread operator (...) <-- use this
let obj4 = { ...obj1, ...obj2 };
// before spread operator was introduced you had to use Object.assign method <-- old and sad
obj4 = Object.assign({}, obj1, obj2);

x = obj4;

console.log(x);

// using arrays of objects for database resources
const todos = [
  { id: 1, name: 'Buy Milk' },
  { id: 2, name: 'Pick up kids from school' },
  { id: 3, name: 'Take out trash' },
]
// select specific keys/properties by using 
// array[index].key;
x = todos[0].name;

console.log(x);

// get all keys from an object and put then into an array
x = Object.keys(todo);

console.log(x);

// this allows us to get the length on an object

x = Object.keys(todo).length;

console.log(x);

// get all values from an object and put then into an array
x = Object.values(todo);

console.log(x);

// get the key value PAIRS and put then into an array within an array
x = Object.entries(todo);

console.log(x);

// gives you a boolean indicating if the object has an property
x = todo.hasOwnProperty('name');

console.log(x);console.log(x);

x = todo.hasOwnProperty('age');

console.log(x);