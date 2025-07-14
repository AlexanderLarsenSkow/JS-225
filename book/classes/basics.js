class Cat {
	constructor(name, color, age) {
		this.name = name;
		this.color = color;
		this.age = age;
	}

	speak() {
		console.log(`Meow. I am ${this.name}. ` +
			`I am a ${this.age}-year-old ${this.color} cat.`
		);
	}
}

let cocoa = new Cat('Cocoa', 'orange', 3);
let leo = new Cat('Leo', 'black', 2);

cocoa.speak();
leo.speak();

console.log(cocoa instanceof Cat); // true

// The constructor method is called whenever you use the new keyword