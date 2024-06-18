const myString = 'capitalize';

let myNewString;

myNewString = myString[0].toUpperCase() + myString.slice(1);

console.log(myNewString);

myNewString1 = myString[0].toUpperCase() + myString.substring(1);

console.log(myNewString1);

myNewString2 = myString.charAt(0).toUpperCase() + myString.slice(1);

console.log(myNewString2);

myNewString3 = myString.charAt(0).toUpperCase() + myString.substring(1);

console.log(myNewString3);

// literal

myNewString4 = `${myString[0].toUpperCase()}${myString.slice(1)}`;

console.log(myNewString4);

myNewString5 = `${myString[0].toUpperCase()}${myString.substring(1)}`;

console.log(myNewString5);

myNewString6 = `${myString.charAt(0).toUpperCase()}${myString.slice(1)}`;

console.log(myNewString6);

myNewString7 = `${myString.charAt(0).toUpperCase()}${myString.substring(1)}`;

console.log(myNewString7);
