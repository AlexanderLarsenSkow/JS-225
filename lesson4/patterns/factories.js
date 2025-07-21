function makeAnimal(sound) {
	return {
		sound,

		makeNoise() {
			console.log(this.sound);
		},
	};
}

let cat = makeAnimal('meow');
cat.makeNoise();
console.log(cat.constructor); // [Function: Object]

// factories are inefficient and there is no way to check type of object.