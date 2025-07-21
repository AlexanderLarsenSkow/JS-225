function Person(firstName, lastName) {
  if (!lastName) {
    // return 'Please provide a last name';
		return {invalidInput: 'Please provide a last name.'};
  }

  this.firstName = firstName;
  this.lastName = lastName;
  this.fullName = function() {
    return (this.firstName + ' ' + this.lastName).trim();
  };
}

let noLastName = new Person('John');
console.log(noLastName);   // logs an instance of a Person object
console.log(noLastName instanceof Person); // => true

// Still an instance of Person. To change that, return an object instead.