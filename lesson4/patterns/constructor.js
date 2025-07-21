function Animal(sound) {
	this.sound = sound;

	this.makeNoise = function() {
		console.log(this.sound);
	};
}

let cat = new Animal('meow');
cat.makeNoise(); // meow

console.log(cat instanceof Animal); // true
console.log(cat.constructor); // [Function: Animal]