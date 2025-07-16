// __proto__ property

class Animal {}
class Cat extends Animal {}

let cat = new Cat();
console.log(cat.__proto__); // Animal {}

class Foo {}
cat.__proto__ = Foo;

console.log(cat.__proto__); // [class Foo]

// __proto__ is the prototype property.
// Can be reassigned and can be used to access the Object prototype.

// Similar to Object.getPrototypeOf / setPrototypeOf. These are better

// Officially deprecated, nevermind.