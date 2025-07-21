function Dog(name, breed, weight) {
	this.name = name;
	this.breed = breed;
	this.weight = weight;

	// this.bark = function() {
	// 	console.log(this.weight > 20 ? 'Woof!' : 'Yip!');
	// };
}

Dog.prototype.bark = function() {
		console.log(this.weight > 20 ? 'Woof!' : 'Yip!')
};

let maxi = new Dog('Maxi', 'German Shepherd', 32);
let dexter = new Dog('Dexter', 'Rottweiler', 50);
let biggie = new Dog('Biggie', 'Whippet', 9);

maxi.bark(); // woof!
biggie.bark(); // Yip!

dexter.bark = function() {
	console.log('WOOF!');
}

dexter.bark(); // WOOF!

// Every dog gets a copy of bark, which is super wasteful.

console.log(maxi.hasOwnProperty('bark')); // true
console.log(dexter.hasOwnProperty('bark')); // true
console.log(biggie.hasOwnProperty('bark')); // true

console.log(maxi.bark === dexter.bark); // false
console.log(maxi.bark === biggie.bark); // false
console.log(biggie.bark === dexter.bark); // false

console.log(Dog.prototype); // {}
console.log(maxi instanceof Dog); // false
console.log(maxi.constructor); // [Function: Object]

console.log(Dog.prototype.constructor); // [Function: Dog]