class Foo {
	static identify() {
		console.log('This is Foo.identify()');
	}
}

class Bar {
	static whoAmI() {
		console.log('This is Bar.whoAmI()');
	}
}

let FooProto = Object.getPrototypeOf(Foo);
console.log(FooProto === Function.prototype); // true?

let BarProto = Object.getPrototypeOf(Bar);
console.log(BarProto === Function.prototype); // true

// Both start out with Function prototype as their object prototype

// Changing Bar's object prototype to Foo, which lets it inherit the static methods from Foo.
	// This does not let it inherit the instance methods, however...

Object.setPrototypeOf(Bar, Foo);

Bar.whoAmI(); // This is Bar.whoAmI()
Bar.identify(); // This is Foo.identify()

// This is crazy.