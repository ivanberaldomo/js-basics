// arrays are special types of objects and are a data structure in javascript that store multiples values
let x;

// Array literal
const numbers = [12, 24, 25, 67, 20];

// Array constructor
const fruits = new Array('apple', 'grape', 'orange');

x = numbers[0];

x = numbers[0] + numbers[3];

x = `My favorite fruit is ${fruits[2]}`;

x = numbers.length;

// array can be changed
fruits[2] = 'pear';

// fruits.length = 2; // changes the max length of an array

// you can add and change element to the array by typing the desired index
fruits[3] = 'strawberry'

// the length is always one more than the last value of an array, you can use it to add new element to the end of an array
fruits[fruits.length] = 'blueberry';
fruits[fruits.length] = 'peach'; // more commonly you're going to use push to add element to an array

x = fruits;

console.log(x);
