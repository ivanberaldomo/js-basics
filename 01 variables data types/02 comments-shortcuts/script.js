// Single line comment
// ctrl + / to comment line
//comments any line, can comment multiple lines 

/* Multiple line comment 
add a /* at the beginning and at the end a */

/* Shortcuts
ctrl + right/left goes to the end/beginning of a line
shift + alt + right/left/up/down highlight where you move
shift + ctrl + click highlight from where you are to where you clicked
alt + up/down moves a line of code up or down
ctrl + z undo
ctrl + d selects the next instance equal to the one selected
ctrl + shift + l selects all the instances equal to the one selected
ctrl + alt + f search inside a file
ctrl + shift + f search in all files
ctrl + b toggles sidebar
ctrl + ~ toggles terminal

/* Log console */
console.log(100);
console.log('string');
console.log(true);

/* Log multiple things */
console.log(100, 'Hello', true);

/* Declares a constant */
const x = 100;

/* Logs a constant */
console.log(x);

/* Errors and warnings */

console.error('error');
console.warn('warning');

/* Console table */

console.table({ name: 'Smith', email: 'john.smith@gmail.com' });

/* Grouping */

console.group('groupname');
console.log(x);
console.error('error');
console.warn('warning');
console.groupEnd();

/* Adds CSS styling into a console log */

const styles = 'padding: 10px; background-color: black; color: white;';

/* Implements the styling into a console log */

console.log('%cstring', styles);
