// Objects Linking to Other Objects

// Done with prototypes, use Object.create to link prototypes.

function Animal(sound) {
	this.sound = sound;
}

Animal.prototype.makeNoise = function() {
	console.log(this.sound);
}

let cat = new Animal('meow');
cat.makeNoise(); // meow

console.log(cat instanceof Animal); // true
console.log(cat.constructor); // [Function Animal]