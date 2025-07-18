let me = {
	firstName: 'Alex',
	lastName: 'Skow',
};

let friend = {
	firstName: 'John',
	lastName: 'Smith',
};

let mom = {
	firstName: 'Heather',
	lastName: 'Skow',
};

let people = {
	collection: [me, friend, mom],

	rollCall() {
		this.collection.forEach(this.fullName);
	},

	fullName(person) {
		console.log(person.firstName + ' ' + person.lastName);
	},

	get(person) {
		if (this.isInvalidPerson(person)) return;
		return this.collection[this.getIndex(person)];
	},

	add(newPerson) {
		if (this.isInvalidPerson(newPerson)) return;
		this.collection.push(newPerson)
	},

	getIndex(person) {
		// return this.collection.indexOf(person);
		return this.collection.findIndex(candidate => {
			return candidate.firstName === person.firstName &&
				candidate.lastName === person.lastName;
		})
	},

	remove(person) {
		if (this.isInvalidPerson(person)) return;

		let index = this.getIndex(person);
		if (index === -1) return;

		this.collection.splice(index, 1);
	},

	update(person) {
		if (this.isInvalidPerson(person)) return;

		let id = this.getIndex(person);
		if (id === -1) {
			this.add(person)
		} else {
			this.collection[id] = person;
		}
	},

	isInvalidPerson(person) {
		return typeof person.firstName !== 'string' &&
		typeof person.lastName !== 'string';
	}
}

people.rollCall();

let dad = {
	firstName: 'Pete',
	lastName: 'Skow',
};

people.add(dad);
people.add({});
people.remove({firstName: 'John', lastName: 'Smith'});
people.remove({});

console.log(people.collection); // friend is no longer present.
console.log(people.get(me));
console.log(people.get(mom));

people.update({firstName: 'Joanna', lastName: 'Jones'});
people.update({firstName: 'Pete', lastName: 'Skow'});
console.log(people.collection);



// this always accesses the current execution context. Useful when the object changes names
// Useful in inheritance chains.

/*
Alex Skow
John Smith
Heather Skow
*/


// let people = [me, friend, mom];

// function rollCall(people) {
// 	people.forEach(fullName);
// }

// function fullName(person) {
// 	console.log(person.firstName + ' ' + person.lastName);
// }

// rollCall(people);
