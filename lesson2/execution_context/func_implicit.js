// AKA implicit binding for functions

// no explicit context provided, bound to the global object

function foo() {
	return 'this here is' + this;
}

console.log(foo()); // this here is [object global]

// implicit context of functions is global / window, so this refers to that object. makes sense.

// This changes things a little:

let object = {
  foo() {
    return 'this here is: ' + this;
  },
};

console.log(object.foo());              // "this here is: [object Object]"

let bar = object.foo; // changing the context here. It starts at the object and moves to global.

console.log(bar());                     // "this here is: [object Window]"

// Wherever we execute the function is where it is bound. This can create issues when you use this,
	// makes sense.