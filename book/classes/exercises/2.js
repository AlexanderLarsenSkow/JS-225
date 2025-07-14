class Dog {
	constructor(name) {
		this.name = name;
	}
}

let boo = new Dog('Boo');
console.log(boo instanceof Dog); // true

let notBoo = {};
console.log(notBoo instanceof Dog); // false