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
		return [this.#firstName, this.#lastName];
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

	set track(newTrack) {
		switch(newTrack) {
			case 'JavaScript':
			case 'Ruby':
			case 'Python':
				this.#track = newTrack;
				break;
			default:
				throw new Error(`Invalid Track: ${track}`);	
		}
	}
}

let student2 = new Student('Kay', 'Oakley', 'JavaScript');
console.log(`${student2.name.join(' ')} ${student2.track}`);
// Kay Oakley JavaScript

let student3 = new Student('Bill', 'Wisner', 'Python');
console.log(`${student3.name.join(' ')} ${student3.track}`);
// Bill Wisner Python

student3.track = 'Ruby';
console.log(student3.track);

// Can use setters in any object!

let teacher = {
	firstName: 'Alan',
	lastName: 'Stone',

	get fullName() {
		return `${this.firstName} ${this.lastName}`;
	},

	set name(nameArray) {
		// [this.firstName, this.lastName] = nameArray;
		this.firstName = nameArray[0];
		this.lastName = nameArray[1];
	}
}
