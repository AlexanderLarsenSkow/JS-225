// Use call and apply to change a function's execution context.

a = 1;

let object = {
	a: 'hello',
	b: 'world',
};

function foo() {
	console.log(this.a);
}

foo(); // 1 context is global object
foo.call(object); // 'hello', context is now object

