// Instance Properties:

// Properties that belong to a specific instance of a certain type.

function Dog(name, weight) {
	this.name = name;
	this.weight = weight;
}

// Instance methods shouldn't be stored on the object as it creates too many copies.
// Store them on the prototype for the constructor.

Dog.prototype.bark = function() {
	console.log('woof!');
}

let maxi = new Dog('Maxi', 12);
console.log(maxi.weight); // 12
maxi.bark();

console.log(Dog.weight); // undefined, since we're trying to access the function's property
console.log(Dog.woof); // undefined