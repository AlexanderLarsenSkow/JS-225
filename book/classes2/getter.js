let teacher = {
	firstName: 'Alan',
	lastName: 'Joker',
	_students: ['Pete', 'Brian', 'Sammy'],
	// Requires a _ before. Otherwise, the method will call itself recursively.
	// a leading _ marks something as serving for internal use only.

	get fullName() {
		return this.firstName + ' ' + this.lastName;
	},

	// Getters are also useful for returning copies of mutable objects!
	get students() {
		return this._students.slice();
	},
};

console.log(teacher.fullName); // 'Alan Joker'
let studentCopy = teacher.students

console.log(studentCopy.reverse()); // ['Sammy', 'Brain', 'Pete']
console.log(teacher.students); // [ 'Pete', 'Brian', 'Sammy' ]

// Final: making the getters private!

class Student {
	#firstName;
	#lastName;
	#track;

	constructor(firstName, lastName, track) {
		this.#firstName = firstName;
		this.#lastName = lastName;
		this.#track = track;
	}

	get name() {
		return [this._firstName, this._lastName];
	}

	get firstName() {
		return this.#firstName;
	}

	get lastName() {
		return this.#lastName;
	}

	get track() {
		return this.#track;
	}
}

let student = new Student('Kay', 'Oakley', 'JavaScript');
console.log(`${student.name.join(' ')} ${student.track}`);
// Kay Oakley JavaScript
console.log(`${student.firstName} ${student.lastName}`);
// Kay Oakley

