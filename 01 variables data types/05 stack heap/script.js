// Data types
// Primitives - stored directly in the "stack", where it is accessed from
// | string | number | boolean | null | undefined | symbol | bigInt |
//
// Reference types - stored in the heap and accessed by reference
// | arrays | functions | objects |
//

// These values are stored on the stack
const name = 'John';
const age = 30;

// Reference values go to the heap
const person = {
  name: 'Brad',
  age: 40,
};

let newName = name;

console.log(name, newName); // John John

newName = 'Johnathan';

console.log(name, newName); // John Johnathan

let newPerson = person;

console.log(person, newPerson); // {name: 'Brad', age: 40} {name: 'Brad', age: 40}

newPerson.name = 'Bradley';

console.log(person, newPerson); // { name: 'Bradley', age: 40} {name: 'Bradley', age: 40}

//⍐    STACK              ⎕⎕   HEAP
//⍐ newPerson ⍈⍈⍈⍈⍈⍈⍈⍈⍈⍈⍈⍈⍈⍈⍈⍈⍈⍈⍈⍗
//⍐ newName = 'Johnathan' ⎕⎕     ⍗
//⍐ person ⍈⍈⍈⍈⍈⍈⍈⍈⍈⍈⍈⍈⍈⍈⍈⍈⍈ {
//⍐ age = 30              ⎕⎕   name: 'Bradley'
//⍐ name = 'John'         ⎕⎕  age: 40
//⍐                       ⎕⎕ }
