// First Class Values:

/*
	passed into function, returned from function, assigned to variable.

	THis is classes
*/

function createObject(classDef) {
	return new classDef();
}

class Foo {
	sayHi() {
		console.log('Hi');
	}
}

let obj = createObject(Foo);
obj.sayHi(); // Hi

console.log(typeof Foo); // function