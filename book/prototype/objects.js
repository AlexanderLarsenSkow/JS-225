// Prototype Objects 

// Function Prototypes vs Object Prototypes

// Function Proto:

class Cat {
	constructor(name, color) {
		this.name = name;
		this.color = color;
	}

	whoAmI() {
		console.log(`My name is ${this.name}.`,
    `\nI am a ${this.color} cat.`);
	}
}

// Constructor Function creates prototype, this is what gives each new object their behavior

// Object Prototype:

let cat1 = new Cat('Jane', 'orange');
let cat2 = new Cat('Val', 'grey');
cat1.whoAmI();
cat2.whoAmI();

let cat1Proto = Object.getPrototypeOf(cat1);
console.log(Object.getOwnPropertyNames(cat1Proto)); // ['constructor', 'whoAmI'], 2 method names