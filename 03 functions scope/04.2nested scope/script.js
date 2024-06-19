// you can access parent variables from the child, but you can't access child variables from the parent
function first() {
  const x = 100;

  function second() {
    const y = 200;
    console.log(x + y);
  }
  second();
}
first();

if (true) {
  const x = 100;

  if (x === 100) {
    const y = 200;
    console.log(x + y); // works
  }
  //console.log(x + y); // doesn't work because y is inside the child, and you can't access child variables from the parent
}
