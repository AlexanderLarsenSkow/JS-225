// Collaborator Objects are other objects used as data in an object.

// Best explained with custom objects:

let cat = {
	name: 'Fluffy',

	makeNoise() {
		console.log('Meow! Meow!');
	}
}

let dog = {
	name: 'Maxi',

	makeNoise() {
		console.log('Woof! Woof!');
	}
}

let pete = {
	name: 'Pete',
	pets: [dog, cat],
	heroes: ['Superman', 'Spiderman', 'Batman'],
	cash: { ones: 12, fives: 2, tens: 0, twenties: 3 },

	printName() {
		console.log(`My name is ${this.name}!`);
		console.log(`I have ${this.pets.length} pets: ${this.pets[0].name} and ${this.pets[1].name}`);
	},

	allHeroes() {
		return this.heroes.join(', ');
	},
};

pete.printName();