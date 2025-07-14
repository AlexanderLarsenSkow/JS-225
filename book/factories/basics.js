function createCat(name, color, age) {
	return {
		name,
		color,
		age,

		speak() {
			console.log(
				`Meow. I am ${this.name}. ` +
				`I am a ${this.age}-year-old ${this.color} cat.`
			);
		}
	};
}

let cocoa = createCat('Cocoa', 'orange', 3);
let leo = createCat('Leo', 'brown', 2);

cocoa.speak();
leo.speak();

/*
	A disadvantage of factories is that each object gets its own copy of the different behavior.
	Not efficient, high memory usage.

	can't use constructor or instanceof operator to check type.
*/

function Foo() {
	this.foo = 42;
}

let obj = new Foo();
console.log(obj instanceof Foo); // true
console.log(obj.constructor); // [Function: Foo]

// Can't use these with factory functions unfortunately.

function Foo2() {
	return {
		foo: 42,
	};
}

let obj2 = Foo2();
console.log(obj2 instanceof Foo); // false
console.log(obj2.constructor); // [Function: Object]