// Static Properties are defined and accessed directly on the constructor
// Not on the instance or prototype --> if they were on the proto, the instances would have access.

function Dog(name, weight) {
	this.name = name;
	this.weight = weight;
	Dog.allDogs.push(this);
}

// Keep track of all instances
Dog.allDogs = [];

Dog.prototype.bark = function() {
	console.log('woof!');
}

// Nothing to do with indiv dogs, but all dogs.
Dog.species = 'Canis lupis';

Dog.displaySpecies = function() {
	console.log(`Dogs belong to the species ${Dog.species}!`);
}

console.log(Dog.species); // Canis lupis
Dog.displaySpecies(); // DOgs belong to the species Canis lupis!