// Removing a method from its containing object and executing it causes it to lose context.

let john = {
	firstName: 'John',
	lastName: 'Doe',

	greeting() {
		console.log(`Hello ${this.firstName} ${this.lastName}!`);
	},
};


// Losing Context here
let foo = john.greeting;
foo(); // Hello undefined undefined!

// call can restore context, but not if its out of scope.

// function repeatThreeTimes(func, context) {
// 	func.call(context); // can't use call since john is out of scope here.
// 	func.call(context);
// 	func.call(context);
// }

// repeatThreeTimes(john.greeting, john); // This works now but now perfect.

// Even more simply, you can use bind:

function repeatThreeTimes(func) {
	func(); // can't use call since john is out of scope here.
	func();
	func();
}

repeatThreeTimes(john.greeting.bind(john)); // This works now but now perfect.
