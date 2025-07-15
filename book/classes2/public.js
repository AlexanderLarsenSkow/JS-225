// Interfaces are by default public, which creates problems for sensitive information / behavior.

let database = {
	getStudentId(name) {
		// Access database in some way.
		return 4204124;
	}
};

class Student {
	constructor(firstName, lastName, track) {
		this.name = [firstName, lastName];
		this.track = track;
	}

	// This method should be private...
	revealStudentId() {
		let studentId = database.getStudentId(this.name);
		console.log(studentId);
	}
}

let student = new Student('John', 'Appleseed', 'Ruby');
console.log(student.name.join(' '), student.track); // John Appleseed Ruby

student.revealStudentId(); // 4204124, prints ID

