const post = {
  id: 1,
  title: 'Post One',
  body: 'This is the body',
};

// Convert to JSON String
const str = JSON.stringify(post);

console.log(str); // {"id":1,"title":"Post One","body":"This is the body"}

// Parse JSON
const obj = JSON.parse(str);

console.log(str);
// body: "This is the body"
// id: 1
// title: "Post One"

const posts = [
  {
    id: 1,
    title: 'Post One',
    body: 'This is the body',
  },
  {
    id: 2,
    title: 'Post Two',
    body: 'This is the body',
  },
];

const str2 = JSON.stringify(posts); //[{"id":1,"title":"Post One","body":"This is the body"},{"id":2,"title":"Post Two","body":"This is the body"}]

console.log(str2);

// you need to parse a JSON string before accessing

