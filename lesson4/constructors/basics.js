function Person(firstName, lastName) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.fullName = function() {
		return (this.firstName + ' ' + this.lastName).trim();
	};
}

let john = new Person('John', 'Doe');
let jane = new Person('Jane');

console.log(john.constructor); // [Function: Person]
console.log(jane.constructor); // [Function: Person]
console.log(john instanceof Person); // true
console.log(jane instanceof Person); // true

// Capitalizing the function isn't required but a convention to let devs know that we
// are calling this with the new opertor.

/*
Calling the function without new defines new global / window properties o.O
*/

Person('Jake', 'Smith');
console.log(global.fullName()); // Jake Smith, outch