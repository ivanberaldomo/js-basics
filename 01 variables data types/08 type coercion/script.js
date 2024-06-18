// depending on the context javascript changes (coerces) a data type into another
let x;

x = 5 + '5'; // 55 string (concatenated 5 + '5')

x = 5 + Number('5'); // 10 number (added 5 + 5)

x = 5 * '5'; // 25 number (javascript coerced a string into a number, because if you multiply a string it results in a error)

x = 5 * null; // 5 number (null is coerced into a number = 0)

x = 5 * Number(null); // 5 number

x = Number(true); // 1 number (true is coerced into a number = 1)

x = Number(false); // 0 number (false is coerced into a number = 0)

x = 5 + true; // 6 number (true is coerced into a number = 1)

x = 5 + false; // 5 number (false is coerced into a number = 0)

x = 5 + undefined //  NaN number (adding anything to undefined gets you NaN - 'Not a Number')

console.log(x, typeof x);
