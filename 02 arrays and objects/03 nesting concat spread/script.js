let x;

const fruits = ['apple', 'pear', 'orange'];
const berries = ['strawberry', 'blueberry', 'raspberry'];

// nesting you can push arrays into other arrays indefinitely
// fruits.push(berries);

// pushing berries into fruits results in a array inside an array at the last position
// 0: "apple"
// 1: "pear"
// 2: "orange"
// 3: (3) ['strawberry', 'blueberry', 'raspberry']
// length: 4

// if you select the index number 3 of the fruits array it will log the entire berries array so in order to select something inside the berries array from the fruits array you have to select the index number 3 in the fruits array then select another index for the berries array

// x = fruits[3][1]; // this selects the index number 3 index of the fruit index selecting the berries array, then selects the index number 1 index of the berries array, selecting blueberry

const allFruits = [fruits, berries];

x = allFruits[1][0];

// you can also concat arrays, this takes the elements of one array and adds into another array
x = fruits.concat(berries);
// this makes one single array with all the elements of both the fruits array and the berries array
// 0: "apple"
// 1: "pear"
// 2: "orange"
// 3: "strawberry"
// 4: "blueberry"
// 5: "raspberry"
// length: 6

// or
// you can also concat with the spread operator (...)
x = [...fruits, ...berries];
// this has the same result as the fruits.concat(berries); method
// 0: "apple"
// 1: "pear"
// 2: "orange"
// 3: "strawberry"
// 4: "blueberry"
// 5: "raspberry"
// length: 6

// you can also use the spread operator to nest arrays
x = [...fruits, berries];
// this will result in a result equal to the fruits.push(berries); method
// 0: "apple"
// 1: "pear"
// 2: "orange"
// 3: (3) ['strawberry', 'blueberry', 'raspberry']
// length: 4

x = [fruits, berries];
// this results in 2 arrays inside a master array just like in the const allFruits = [fruits, berries]; method although it doesn't use the spread operator (...) as the spread operator is for concatenating arrays
// 0: "apple"
// 1: "pear"
// 2: "orange"
// length: 3
// 0: "strawberry"
// 1: "blueberry"
// 2: "raspberry"
// length: 3

// Array flattening
// if you have arrays with nested array inside them you can turn them into a single array using the flat method
const arr = [0, 5, [10, 15], 20, [25, 30], 35];
x = arr.flat();

// Static methods on array objects
// .isArray - true or false, checks if a data structure is an array
x = Array.isArray(fruits); //true
x = Array.isArray('apple', 'pear', 'orange'); // false

// .from - creates an array from an array like values
x = Array.from('12345');

// .of - creates an array from a set of values
const a = 0;
const b = 5;
const c = 10;

x = Array.of(a, b, c);

console.log(x);
