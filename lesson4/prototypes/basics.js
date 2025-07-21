// Object.getPrototypeOf => get object prototoype
// Object.setPrototypeOf => set prototype
// Object.create(arg) => create new object with this prototype

let foo = {};
let qux = Object.create(foo);
console.log(Object.getPrototypeOf(qux) === foo); // true 
console.log(foo.isPrototypeOf(qux)); // true

// use Object.prototype.isPrototypeOf to check if something is a prototype of an argument.

// set prototype:

let bar = {};

Object.setPrototypeOf(qux, bar);
console.log(Object.getPrototypeOf(qux) === bar); // true
console.log(bar.isPrototypeOf(qux)); // true