function makeFruit(name, color) {
	return {
		name,
		color,

		isRipe() {
			return `This ${this.name} is ripe!`;
		},

		describe() {
			return `This ${this.name} is ${this.color}.`;
		},
	};
}

let apple = makeFruit('Apple', 'Red');
let banana = makeFruit('Banana', 'Yellow');
let blackberry = makeFruit('Blackberry', 'Black');

console.log(apple.describe());
console.log(banana.describe());
console.log(blackberry.describe());