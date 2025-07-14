// Encapsulation: Bundling behavior and state together in an object.

let cocoa = {
	animalType: 'Cat',
	name: 'Cocoa',

	purr() {
		console.log('purr');
	},

	info() {
		console.log(`My name is ${this.name} and I am a ${this.animalType}!`);
	},
}

cocoa.purr(); // purr
cocoa.info(); // My name is Cocoa and I am a Cat!

// Bundling data and behavior together in the same cocoa object