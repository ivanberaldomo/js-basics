
console.log(100);
console.log('string');
console.log(true);

console.log(100, 'Hello', true);

const x = 100;

console.log(x);

console.error('error');
console.warn('warning');

console.table({ name: 'Smith', email: 'john.smith@gmail.com' });

console.group('groupname');
console.log(x);
console.error('error');
console.warn('warning');
console.groupEnd();

const styles = 'padding: 10px; background-color: black; color: white;';

console.log('%cstring', styles);
