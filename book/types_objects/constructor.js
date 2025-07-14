function Cat(name) {
	this.name = name;

	this.purr = function() {
		console.log('purrrr');
	}

	this.speak = function() {
		console.log('meow');
	}
}

let butterScotch = new Cat('Butterscotch');
let pudding = new Cat('Pudding');

// new is a constructor call => creating instances of Cat object

console.log(butterScotch);
console.log(pudding);

pudding.purr();
pudding.speak();


/* This can be rewritten like this:

class Cat {
	constructor(name) {
		this.name = name;
	}
}


*/