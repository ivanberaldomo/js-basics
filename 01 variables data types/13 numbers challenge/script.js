// variables
let x;

let y;

// random number between 1 and 100
x = Math.floor(Math.random() * 100 + 1);

// random number between 1 and 50
y = Math.floor(Math.random() * 50 + 1);

// calculations
const sum = x + y;

const difference = x - y;

const product = x * y;

const quotient = x / y;

const modulus = x % y;

// outputs
const sumOutput = `${x} + ${y} = ${sum}`;

const differenceOutput = `${x} - ${y} = ${difference}`;

const productOutput = `${x} * ${y} = ${product}`;

const quotientOutput = `${x} / ${y} = ${quotient}`;

const modulusOutput = `${x} % ${y} = ${modulus}`;

// logs
console.log(sumOutput);

console.log(differenceOutput);

console.log(productOutput);

console.log(quotientOutput);

console.log(modulusOutput);
