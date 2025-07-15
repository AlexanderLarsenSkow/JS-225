// Class Methods, defining on a class, not on the object.

class myClass {
	static staticMethod() {
		console.log('This is a static method');
	}

	instanceMethod() {
		console.log('This is an instance method.');
	}
}

myClass.staticMethod(); // This is a static method

const instance = new myClass();

instance.instanceMethod(); // This is an instance method
// instance.staticMethod(); // TypeError, instance.staticMethod is not a function

// Common for report relevant class data:

class Student {
	static counter = 0;

	constructor(name) {
		this.name = name;
		Student.counter += 1;
	}

	static showCounter() {
		console.log(`The counter is at ${Student.counter}!`);
	}
}

Student.showCounter();
new Student('Jane');

Student.showCounter();
new Student('Sam');

Student.showCounter();