let x;

// square root of an number
x = Math.sqrt(9); // 3

// absolute number
x = Math.abs(-5); // 5

// rounds a number
x = Math.round(4.5); // 5
x = Math.round(4.4); // 4

// rounds up a number
x = Math.ceil(4.4); // 5

// rounds down a number
x = Math.floor(4.5); // 4

// returns the value of a number raised to a specific value
x = Math.pow(2, 3); // 8

// returns the smallest of several numbers
x = Math.min(4,5,3); // 3

// returns the biggest of several numbers
x = Math.max(4,5,3); // 5

// returns a random number
x = Math.random(); // random decimal between 0 and 1
x = Math.random() * 10 // random decimal between 0 and 9
x = Math.random() * 10 + 1 // random decimal between 1 and 10
x = Math.floor(Math.random() * 10 + 1) // random number between 1 and 10
x = Math.floor(Math.random() * 100 + 1) // random number between 1 and 100


console.log(x);
