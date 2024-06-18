let x;

const num = new Number(5);

// converts number to string
x = num.toString(); // 5 string

// converts number to string then counts characters
x = num.toString().length; // 1 number

// specifies the number of decimal points
x = num.toFixed(2) // 5.00 string (rounds up)

// toPrecision is similar but it counts the whole number instead of just decimal cases  (rounds up)
x = num.toPrecision(2) // 5.0 string

// return the result in exponential
x = num.toExponential(2); // 5.00e+0 string

// changes the numbers to the set locale language
x = num.toLocaleString('pt-BR'); // 5 string

// returns the value of the number
x = num.valueOf(); // 5 number

// returns the largest possible number for the number type
x = Number.MAX_VALUE;

// returns the minimum possible number for the number type
x = Number.MIN_VALUE;

console.log(x,typeof x);
