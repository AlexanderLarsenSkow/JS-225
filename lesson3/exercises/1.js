const person = {
  firstName: 'Rick ',
  lastName: 'Sanchez',
  fullName: this.firstName + this.lastName,

	fullName() {
		return this.firstName + this.lastName;
	}
};

console.log(person.fullName()); // NaN

// Can't reference this with properties in other properties.