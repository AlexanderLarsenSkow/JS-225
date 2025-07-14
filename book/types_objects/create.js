// There is class syntax in JS, but no true class.


// There is only data/state here
let student = {
	name: 'Jake',
	age: 27,
};

console.log(student);

// We want to combine behavior and state in OOP:

student = {
	name: 'Jake',
	age: 27,

	study() {
		console.log(`${this.name} is studying!`);
	},

	pass() {
		console.log(`${this.name} has passed the course!`);
	},
};

student.study(); // Jake is studying!
student.pass(); // Jake has passed the course!