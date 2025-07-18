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

let foo = createStudent('Foo', '1st');
foo.info();
// "Foo is a 1st year student"
foo.listCourses();
// [];
foo.addCourse({ name: 'Math', code: 101 });
foo.addCourse({ name: 'Advanced Math', code: 102 });
foo.listCourses();
// // [{ name: 'Math', code: 101 }, { name: 'Advanced Math', code: 102 }]
foo.addNote(101, 'Fun course');
foo.addNote(101, 'Remember to study for algebra');
foo.viewNotes();
// // "Math: Fun course; Remember to study for algebra"
foo.addNote(102, 'Difficult subject');
foo.viewNotes();
// // "Math: Fun course; Remember to study for algebra"
// // "Advance Math: Difficult subject"
foo.updateNote(101, 'Fun course');
foo.viewNotes();
// // "Math: Fun course"
// // "Advanced Math: Difficult subject"