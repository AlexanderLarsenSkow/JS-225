function createStudent(name, number) {
	return {
		name,
		number,
		courses: [],

		info() {
			console.log(`${this.name} is a ${this.number} year student.`);
		},

		addCourse(course) {
			this.courses.push(course);
		},

		listCourses() {
			console.log(this.courses);
		},

		listGrades() {
			this.courses.forEach(course => {
				this.displayGrade(course);
			})
		},

		displayGrade({name, grade}) {
			if (grade) {
				console.log(`${name}: ${grade}`);
			} else {
				console.log(`${name}: in progress`);
			}
		},

		findCourse(code) {
			return this.courses.find(course => course.code === code);
		},

		addNote(code, note) {
			let course = this.findCourse(code);
			if (course.note) {
				course.note += `; ${note}`;
			} else {
				course.note = note;
			}
		},

		updateNote(code, newNote) {
			let course = this.findCourse(code);
			course.note = newNote;
		},

		viewNotes() {
			let courseKeys = Object.keys(this.courses);

			courseKeys.forEach(coursekey => {
				let name = this.courses[coursekey].name;
				let note = this.courses[coursekey].note;

				if (note) {
					console.log(`${name}: ${note}`);
				}
			})
		},
	};
}

let school = {
	students: [],

	addStudent(name, number) {
		let student;

		switch(number) {
			case '1st':
			case '2nd':
			case '3rd':
			case '4th':
			case '5th':
				student = createStudent(name, number);
				this.students.push(student);
				break;
			default:
				console.log('Error: Invalid Year.');
				return;
		}

		return student;
	},

	findStudent(name) {
		return this.students.find(student => student.name === name);
	},

	enrollStudent(name, course) {
		let student = this.findStudent(name);
		student.addCourse(course);
	},

	addGrade(name, code, grade) {
		let student = this.findStudent(name);
		let course = student.findCourse(code);

		course.grade = grade;
	},

	getReportCard(name) {
		let student = this.findStudent(name);
		student.listGrades();
	},

	courseReport(courseName) {
		console.log(`\nGrades for ${courseName}:`);
		this.students.forEach(student => {
			let course = student.courses.find(course => course.name === courseName);
			if (!course) return;

			console.log(student.name);
			student.displayGrade(course);
		});
	},
}

// Examples of created student objects with grades; methods
// on the objects are not shown here for brevity. The
// following are only showing the properties that aren't
// methods for the three objects

school.addStudent('Jake', '6th'); // Error: Invalid Year

school.addStudent('Paul', '3rd');
let paul = school.students[0];

school.enrollStudent('Paul', { name: 'Math', code: 101 });
school.enrollStudent('Paul', { name: 'Advanced Math', code: 102, });
school.enrollStudent('Paul', {name: 'Physics', code: 202, });

school.addGrade('Paul', 101, 95);
school.addGrade('Paul', 102, 90);

console.log(paul);
// {
//   name: 'Paul',
//   year: '3rd',
//   courses: [
//     { name: 'Math', code: 101, grade: 95, },
//     { name: 'Advanced Math', code: 102, grade: 90, },
//     { name: 'Physics', code: 202, }
//   ],
// }

school.addStudent('Mary', '1st');
let mary = school.students[1];

school.enrollStudent('Mary', { name: 'Math', code: 101 });

school.addGrade('Mary', 101, 91);

console.log(mary);
// {
//   name: 'Mary',
//   year: '1st',
//   courses: [
//     { name: 'Math', code: 101, grade: 91, },
//   ],
// }

school.addStudent('Kim', '2nd');
let kim = school.students[2];

school.enrollStudent('Kim', { name: 'Math', code: 101 });
school.enrollStudent('Kim', { name: 'Advanced Math', code: 102, });

school.addGrade('Kim', 101, 93);
school.addGrade('Kim', 102, 90);

console.log(kim);
// {
//   name: 'Kim',
//   year: '2nd',
//   courses: [
//     { name: 'Math', code: 101, grade: 93, },
//     { name: 'Advanced Math', code: 102, grade: 90, },
//    ],
// }

school.getReportCard('Paul');

school.courseReport('Math');
school.courseReport('Advanced Math');
school.courseReport('Physics');