// Pseudo Classical Style:

function Animal(species, name) {
	this.animal = species;
	this.name = name;
}

Animal.prototype.sleep = function() {
	console.log('I am sleeping');
}

Animal.prototype.wake = function() {
	console.log('I am awake');
}

let pudding = new Animal('Cat', 'Pudding');
console.log(`I am a ${pudding.animal}. My name is ${pudding.name}.`);
pudding.sleep(); // I am sleeping
pudding.wake();  // I am awake

let neptune = new Animal('Fish', 'Neptune');
console.log(`I am a ${neptune.animal}. My name is ${neptune.name}.`);
neptune.sleep(); // I am sleeping
neptune.wake();  // I am awake