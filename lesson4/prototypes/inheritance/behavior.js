// object's behavior and data can be stored not just in the object, but anywhere on the chain

// Prototypal Inheritance or Behavior Delegation

let dog = {
	say() {
		console.log(this.name + ' says Woof!');
	},

	run() {
		console.log(this.name + ' runs away.');
	},
};

let fido = Object.create(dog);
fido.name = 'Fido';

fido.say(); // Fido says Woof!
fido.run(); // Fido runs away.

let spot = Object.create(dog);
spot.name = 'Spot';

spot.say(); // Spot says Woof!
spot.run(); // Spot runs away.

console.log(dog.isPrototypeOf(spot)); // true	
