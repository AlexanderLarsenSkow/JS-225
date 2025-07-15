class Foo {
	#data;
	#initializedData = 43;

	constructor(value) {
		this.#data = value;
	}

	show() {
		console.log(`${this.#data}, ${this.#initializedData}`);
	}
}

let foo = new Foo(100);
foo.show(); // 100, 43

// Rewriting the Student Class from Earlier:

class Student {
	#name;
	#track;

	constructor(firstName, lastName, track) {
		this.#name = [firstName, lastName];
		this.#track = track;
	}

	name() {
		return this.#name;
	}

	track() {
		return this.#track;
	}
}

let stud = new Student('John', 'j', 'ruby');
console.log(stud.name()); // ['John', 'j']
console.log(stud.track()); // 'ruby'

// console.log(stud.#name, stud.#track); // SyntaxError: Private field #name must be declared in an
	// enclosing class.