class Cat {
	constructor(name = 'Kitty') {
		this.name = name;
	}

	static genericGreeting() {
		console.log('I\'m a cat!');
	}

	rename(newName) {
		this.name = newName;
	}

	greet() {
		console.log(`I\'m a cat named ${this.name}!`);
	}
}

Cat.genericGreeting(); // I'm a cat!

let kitty = new Cat();
let sophie = new Cat('Sophie'); // I'm a cat named Sophie

kitty.greet();
sophie.greet();

sophie.rename('Alessandra');
sophie.greet();