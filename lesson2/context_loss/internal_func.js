// Internal Function Losing Method Context

// nested functions in methods do not receive the execution context of the outer object.
// Must use call or bind.

let obj = {
  a: 'hello',
  b: 'world',

  foo() {
		let self = this; // 1 fix

    function bar() {
      console.log(this.a + ' ' + this.b); // global context
			// console.log(self.a + ' ' + self.b);
    }

    bar();
		// bar.call(this); // Another fix
  },
};

obj.foo();
//  undefined undefined

// Fix with self:

/*
	Can also bind the function if it is a function expression:

	let bar = function() {
		console.log(this.a + ' ' + this.b);
	}.bind(this);

An arrow function also works, since arrow functions share context with the function they are declared
	inside.
*/

let testArrow = {
	a: 10,
	b: 20,

	test() {
		let log = () => console.log(this.a + this.b);
		log();
	},
};

testArrow.test(); // 30