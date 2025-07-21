let foo = {
	a: 1,
	b: 2,
};

let bar = Object.create(foo);
let baz = Object.create(bar);

console.log(bar.a); // 1
console.log(baz.a); // 1
console.log(baz.c); // undefined

// prototypal chain created with foo at the top (under Object.prototype).
// bar and baz have access to a and b properties.

// example 2:

let method = {
	hello() {
		return 'hello ' + this.name;
	},
};

let newOne = Object.create(method);
newOne.name = 'world';
console.log(newOne.hello()); // 'hello world'