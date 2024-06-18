const x = 100;
const foo = 1; // const doesn't get added to the window object
var bar = 2; // var gets added to the window object

if (true) {
  const y = 200;
  console.log(x + y);
}

// console.log(x + y); does not work - const y is only inside function

for (let i = 0; i <= 10; i++) {
  console.log(i);
}

// console.log(i); does not work - outside scope

if (true) {
  const a = 500;
  let b = 600;
  var c = 700;
}

// console.log(a); - error variable outside scope
// console.log(b); - error variable outside scope
console.log(c); // var works outside blocks like for and if statements but not outside function scope

function run() {
  var d = 100;
  console.log(d);
}

run(); // console.log(d); doesn't work because var is function scoped
