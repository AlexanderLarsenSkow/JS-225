// Class Properties.

// Often used for constants or utiltiy data shared across instances.

class myClass {
	static myField = 'This is static field';

	constructor() {
		console.log(myClass.myField) // accessible inside the class
	}
}

console.log(myClass.myField) // accessible outside the class

let instance = new myClass();
console.log(instance.myField); // undefined, myField not defined for this object.

// Commonly used to track counts of instances.

class Student {
	static counter = 0;

	constructor(name) {
		this.name = name;
		Student.counter += 1;
	}
}

console.log(Student.counter); // 0

new Student('Jane');

console.log(Student.counter); // 1

new Student('Sam');

console.log(Student.counter); // 2

