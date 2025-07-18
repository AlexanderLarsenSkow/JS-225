// Implicit Execution Context for Methods:

// Calling object

let foo = {
	bar() {
		console.log(this);
	}
}

foo.bar(); // { bar: [Function: bar] }
// returns the literal object.

// However, we can change the context if we call it in a different way:

let contextChange = foo.bar;

contextChange(); // [object: Global]

// Now it has a different context and this has a different reference.