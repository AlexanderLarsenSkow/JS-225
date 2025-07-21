let prot = {};

let foo = Object.create(prot);

console.log(prot.isPrototypeOf(foo)); // true
console.log(Object.getPrototypeOf(foo) === prot); // true