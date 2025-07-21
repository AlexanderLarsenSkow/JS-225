// Prototype Pattern of Object Creation

let Dog = function() {}

Dog.prototype.say = function() {
	console.log(this.name + ' says woof!');
}

Dog.prototype.run = function() {
	console.log(this.name + ' runs away.');
}

let fido = new Dog();
fido.name = 'fido';

fido.say();
fido.run();

let spot = new Dog();
spot.name = 'Spot';

spot.say();
spot.run();