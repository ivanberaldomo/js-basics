// const user = 'Ivan' // Identifier 'user' has already been declared
// So we add into an IIFE that's not inside the global scope
(function () {
  const user = 'Ivan';
  console.log(user);
  const hello = () => console.log('Hello from the IIFE');
  hello();
})();
// hello(); doesn't work - hello is in another scope

// Adding params into an IIFE
(function (name) {
  console.log(`Hello ${name}`);
})('James');

// Naming an IIFE
// (function hello() {
//   console.log('Hello');
//   hello();
// })();
// can only call inside function so there's no reason to name it, if you call inside function a loop happens and eventually the browser crashes
