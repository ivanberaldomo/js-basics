const library = [
  {
    title: 'The Ruins of Gorlan',
    author: 'John Flanagan',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: 'The Burning Bridge',
    author: 'John Flanagan',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: 'The Icebound Land',
    author: 'John Flanagan',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
];

// verifies the value of the property read
console.log(library[0].status.read); // false
console.log(library[1].status.read); // false
console.log(library[2].status.read); // false

// changes the value of the property read to true
library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

// verifies if its value again
console.log(library[0].status.read); // true
console.log(library[1].status.read); // true
console.log(library[2].status.read); // true

// destructure the property title from the first book of the library and renames it firstBook
const { title: firstBook } = library[0]; // cannot just write library because it's an array, we need to select the object's using it's index number

// verifies the value of the property title
console.log(firstBook);

// converts the array into a JSON string
const str = JSON.stringify(library);

// logs the JSON string
console.log(str);
