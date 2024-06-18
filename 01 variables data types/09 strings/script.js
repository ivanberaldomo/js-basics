let x;

const name = 'John';
const age = 30;

x = 'Hello, my name is ' + name + ' and I am ' + age + ' years old.'; // Hello, my name is John and I am 30 years old

// Template literals
// `string ${variable} string`
x = `Hello, my name is ${name} and I am ${age} years old`; // Hello, my name is John and I am 30 years old

// String Properties and Methods
//const s = 'Hello World!';
// x = s.length; // 12
// x = typeof s; // string

// when we use a method or an property what the wrapper does is convert your data into an object
//const s = new String('Hello World!');
// x = typeof s;
// console.log(x); // object

const s = new String('Hello World!');

x = typeof s;

// access value by key
x = s[0]; // H

x = s[1]; // e

// shows all methods that can be used with string
x = s.__proto__; //or
// console.log(s);
//
// String
// anchor: ƒ anchor()
// at: ƒ at()
// big: ƒ big()
// blink: ƒ blink()
// bold: ƒ bold()
// charAt: ƒ charAt()
// charCodeAt: ƒ charCodeAt()
// codePointAt: ƒ codePointAt()
// concat: ƒ concat()
// constructor: ƒ String()
// endsWith: ƒ endsWith()
// fixed: ƒ fixed()
// fontcolor: ƒ fontcolor()
// fontsize: ƒ fontsize()
// includes: ƒ includes()
// indexOf: ƒ indexOf()
// isWellFormed: ƒ isWellFormed()
// italics: ƒ italics()
// lastIndexOf: ƒ lastIndexOf()
// length: 0
// link: ƒ link()
// localeCompare: ƒ localeCompare()
// match: ƒ match()
// matchAll: ƒ matchAll()
// normalize: ƒ normalize()
// padEnd: ƒ padEnd()
// padStart: ƒ padStart()
// repeat: ƒ repeat()
// replace: ƒ replace()
// replaceAll: ƒ replaceAll()
// search: ƒ search()
// slice: ƒ slice()
// small: ƒ small()
// split: ƒ split()
// startsWith: ƒ startsWith()
// strike: ƒ strike()
// sub: ƒ sub()
// substr: ƒ substr()
// substring: ƒ substring()
// sup: ƒ sup()
// toLocaleLowerCase: ƒ toLocaleLowerCase()
// toLocaleUpperCase: ƒ toLocaleUpperCase()
// toLowerCase: ƒ toLowerCase()
// toString: ƒ toString()
// toUpperCase: ƒ toUpperCase()
// toWellFormed: ƒ toWellFormed()
// trim: ƒ trim()
// trimEnd: ƒ trimEnd()
// trimLeft: ƒ trimStart()
// trimRight: ƒ trimEnd()
// trimStart: ƒ trimStart()
// valueOf: ƒ valueOf()
// Symbol(Symbol.iterator): ƒ [Symbol.iterator]()
// [[Prototype]]: Object
// [[PrimitiveValue]]: ""

// change case
x = s.toUpperCase(); // HELLO WORLD!
x = s.toLowerCase(); // hello world!

// return the character at the specified index
x = s.charAt(0); // H

// return the index of an specific character (the first instance)
x = s.indexOf('H'); // 0
x = s.indexOf('l'); // 2

// search an string for an specified value
x = s.substring(0, 4); // Hell
x = s.substring(1, 5); // ello
x = s.substring(7); // orld!

// slice is also similar  but you can use an negative character to start from different locations
x = s.slice(-11); // ello World!
x = s.slice(1, 5); // ello
x = s.slice(-12, 6); // Hello

// trims the whitespace
x = '     Hello World!'; //      Hello World!
x = x.trim(); // Hello World!

// searches for a string within a string and replaces it with the specified new string
x = s.replace('World', name); // Hello John!
x = s.replace('Hello', 'skibidi'); // skibidi World!

// return true or false if a string is found within that string
x = s.includes('Hello'); // true
x = s.includes('Hell'); // true
x = s.includes('Helli'); // false
x = s.includes('hello'); // false

// return the primitive value of a variable
x = s.valueOf(); // Hello World!

// splits a string into an array and takes an separator as an argument
x = s.split(); //  ['Hello World!']
x = s.split(' '); //  (2) ['Hello', 'World!']
x = s.split(''); // (12) ['H', 'e', 'l', 'l', 'o', ' ', 'W', 'o', 'r', 'l', 'd', '!']

console.log(x);
