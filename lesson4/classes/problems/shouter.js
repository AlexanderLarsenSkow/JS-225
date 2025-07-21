// function Person(name) {
//   this.name = name;
// }

// Person.prototype.greeting = function() {
//   return `Hello, I'm ${this.name}. It's very nice to meet you.`;
// }

// function Shouter(name) {
//   Person.call(this, name);
// }

// Shouter.prototype = Object.create(Person.prototype);
// Shouter.prototype.greeting = function() {
//   return Person.prototype.greeting.call(this).toUpperCase();
// }

class Person {
	constructor(name) {
		this.name = name;
	}

	greeting() {
  	return `Hello, I'm ${this.name}. It's very nice to meet you.`;
	}
}

class Shouter extends Person {
	greeting() {
		return super.greeting().toUpperCase();
	}
}

let person = new Person("Jane");
let shouter = new Shouter("Bob");

console.log(person.greeting()); // Hello, I'm Jane. It's very nice to meet you.
console.log(shouter.greeting()); // HELLO, I'M BOB. IT'S VERY NICE TO MEET YOU.