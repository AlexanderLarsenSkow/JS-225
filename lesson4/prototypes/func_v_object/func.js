// Function Prototype: A special property of functions

/*
Function used as constructor: object is given reference to function prototype.
This reference is the object prototype. Oh right.
*/

let Foo = function() {}
let obj = Foo.prototype;

let bar = new Foo();
let baz = new Foo();

console.log(Object.getPrototypeOf(bar) === obj); // true
console.log(Object.getPrototypeOf(baz) === obj); // true

console.log(bar.constructor); // [Function: Foo]
console.log(baz.constructor); // [Function: Foo]
console.log(bar instanceof Foo); // true
console.log(baz instanceof Foo); // true