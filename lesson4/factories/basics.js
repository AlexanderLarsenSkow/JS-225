function createPerson(firstName, lastName) {
	let person = {};

	person.firstName = firstName;
	person.lastName = lastName || '';

	person.fullName = function() {
		return (this.firstName + ' ' + this.lastName).trim();
	};

	return person;
}

let john = createPerson('John', 'Dog');
let jane = createPerson('Jane');

console.log(john.fullName()); // John Dog
console.log(jane.fullName());

/*
function createPerson(firstName, lastName='') {
  return {
    firstName,
    lastName,
    fullName() {
      return (this.firstName + ' ' + this.lastName).trim();
    },
  };
}

Disadvantages:
	- Every new object has its own copy of all methods, which is not efficient for memory purposes.
	- Cannot link the object to its object type. There is no link between the factory and the object.
*/
