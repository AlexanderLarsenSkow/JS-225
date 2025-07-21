let prot = {};

let foo = Object.create(prot);

console.log(prot.isPrototypeOf(foo)); // true
console.log(Object.prototype.isPrototypeOf(foo)); // true

// Both lines should run true.

// The first line returns true because prot is the prototype of foo, due to the Object.create call
// on line 3.

// Line 6 returns true as Object.prototype is the prototype of all objects, it is just much further
// up the chain.