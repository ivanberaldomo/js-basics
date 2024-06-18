const arr = [0, 5, 10, 15, 20];
// these methods manipulate the current array
// push will add a element to the end of an array
arr.push(100);
// pop will remove a element at the end of an array
arr.pop();
// unshift will add a element to the beginning of an array
arr.unshift(99);
// shift will remove a element at the begging of an array
arr.shift();
// reverse will reverse the order of an array
// arr.reverse();

// these methods call values and information from an array
// true or false if the element is present in an array
x = arr.includes(20);

// finds the position of an element present in the array, if the element is not present it will return -1
x = arr.indexOf(15);

// returns a specific part of an array as another array, meaning it doesn't change the original array (start, end)
x = arr.slice(1, 4);

// removes a specific number of elements from the index specified as a new array(index, numberOfElements), meaning it changes the original array
// x = arr.splice(1, 3);
// you can use splice to remove a single element of an array by selecting the index of the previous element and selecting just one element (index,1)
// x = arr.splice(3, 1);

x = arr.splice(1, 4).reverse().toString().substring(0, 2);

console.log(x);
