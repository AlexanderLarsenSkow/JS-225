let strings = {
	a: 'hello',
	b: 'world',

	foo() {
		console.log(this.a, this.b);
	},
};

let numbers = {
	a: 1,
	b: 2,
};

strings.foo() // hello world

// Changing the context from strings to numbers
strings.foo.call(numbers); // 1, 2

// Borrowing a method from another object, not copying.

// someObject.someMethod.call(context, arg1, arg2, arg3, ...)