class Animal {
	constructor(name) {
		this.name = name;
	}

	eat() {
		console.log(`${this.name} is eating.`);
	}
}

class Mammal extends Animal {
	constructor(name, hasFur) {
		super(name);
		this.hasFur = hasFur;
	}

	sleep() {
		console.log(`${this.name} is sleeping.`);
	}
}

class Dog extends Mammal {
	constructor(name, hasFur, breed) {
		super(name, hasFur);
		this.breed = breed;
	}

	bark() {
		console.log(`${this.name} the ${this.breed} is barking.`);
	}
}

let myDog = new Dog('Rex', true, 'German Shepherd');
myDog.eat();
myDog.sleep();
myDog.bark();