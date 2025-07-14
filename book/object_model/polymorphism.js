// Different objects can respond to a common interface. Same behaviors etc.

let cat = {
	move() {
		console.log("The cat is walking");
	},
};

let planet = {
	move() {
		console.log("The planet is revolving around the Sun");
	},
};

for (let item of [cat, planet]) {
	item.move();
}