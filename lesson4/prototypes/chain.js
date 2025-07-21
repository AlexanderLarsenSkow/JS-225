let foo = {
	a: 1,
	b: 2,
};

let bar = Object.create(foo);
let baz = Object.create(bar);
let qux = Object.create(baz);

console.log(Object.getPrototypeOf(qux) === baz) // true
console.log(Object.getPrototypeOf(baz) === bar) // true
console.log(Object.getPrototypeOf(bar) === foo) // true

console.log(foo.isPrototypeOf(qux)); // true, same prototype

let test = {
	a: 1,
};

// When no prototype is set, it is set to Object.prototype

console.log(Object.getPrototypeOf(test) === Object.prototype); // true