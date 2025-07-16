class Animal {
	constructor(type) {
		this.type = type;
	}

	eat() {
		console.log('I am eating...');
	}
}

class Cat extends Animal {
	constructor(name, color) {
		super();
		this.name = name;
		this.color = color;
	}

	  whoAmI() {
    console.log(`My name is ${this.name}.`,
                `\nI am a ${this.color} cat.`);
  }
}

let cheddar = new Cat('Cheddar', 'ginger');
let cheddarProto = Object.getPrototypeOf(cheddar);
let cheddarProto2 = Object.getPrototypeOf(cheddarProto);

console.log(Object.getOwnPropertyNames(cheddarProto)); // ['constructor', 'whoAmI']

console.log(Object.getOwnPropertyNames(cheddarProto2)); // ['constructor', 'eat']

// The prototype of the prototype is the first one up the chain ^

/*
	Animal Proto
	Cat Proto
*/

console.log(cheddarProto2 === Animal.prototype); // true

cheddar.whoAmI();
cheddar.eat();

class Lion extends Cat {
	kill() {
		console.log('I am hunting!');
	}
}

let lion = new Lion('Samuel', 'black');
let lionProto = Object.getPrototypeOf(lion);
let catProto = Object.getPrototypeOf(lionProto);

console.log(Object.getOwnPropertyNames(lionProto)); // ['constructor', 'kill']
console.log(Object.getOwnPropertyNames(catProto)); // ['constructor', 'whoAmI']

console.log(catProto === cheddarProto); // true

lion.kill();
lion.whoAmI();
lion.eat();