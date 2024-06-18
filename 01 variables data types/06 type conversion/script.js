// string to number
// parse integer
let stringToNumber1 = '100';

console.log(stringToNumber1, typeof stringToNumber1);

stringToNumber1 = parseInt(stringToNumber1);

console.log(stringToNumber1, typeof stringToNumber1);

// or number constructor
let stringToNumber2 = '50';

console.log(stringToNumber2, typeof stringToNumber2);

stringToNumber2 = Number(stringToNumber2);

console.log(stringToNumber2, typeof stringToNumber2);

// or unary operator
let stringToNumber3 = '30';

console.log(stringToNumber3, typeof stringToNumber3);

stringToNumber3 = +stringToNumber3;

console.log(stringToNumber3, typeof stringToNumber3);

// number to string
// method (function attached to an object),
// since its a primitive data type javascript creates a temporary wrapper of the appropriate object type
let numberToString1 = 100;

console.log(numberToString1, typeof numberToString1);

numberToString1 = numberToString1.toString();

console.log(numberToString1, typeof numberToString1);

// or string constructor
let numberToString2 = 50;

console.log(numberToString2, typeof numberToString2);

numberToString2 = String(numberToString2);

console.log(numberToString2, typeof numberToString2);

// or parseFloat
// if you have a decimal, if you use parseInt it will lose the decimal part
let numberToString3 = 99.9;

console.log(numberToString3, typeof numberToString3);

numberToString3 = parseFloat(numberToString3);

console.log(numberToString3, typeof numberToString3);

// number to boolean
// boolean constructor 0 = false, any other number = true
let numberToBoolean1 = 1;

console.log(numberToBoolean1, typeof numberToBoolean1);

numberToBoolean1 = Boolean(numberToBoolean1);

console.log(numberToBoolean1, typeof numberToBoolean1);