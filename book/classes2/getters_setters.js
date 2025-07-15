class Student {
  constructor(firstName, lastName, track) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.track = track;
  }

// This getter allows us to work around changing the code and keeping the array style from before.
	get name() {
		return [student.firstName, student.lastName];
	}
}

let student = new Student('Kay', 'Oakley', 'JavaScript');
console.log(`${student.name.join(' ')} ${student.track}`); 
// No need to call it with parnetheses when you use the get keyword.

