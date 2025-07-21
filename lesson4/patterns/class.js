class Animal {
	constructor(sound) {
		this.sound = sound;
	}

	makeNoise() {
		console.log(this.sound);
	}
}

let cat = new Animal('meow');
cat.makeNoise(); // meow

console.log(cat instanceof Animal); // true
console.log(cat.constructor); // [class Animal]