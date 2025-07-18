// OOP is about a pattern of programming using custom objects.

// let car = {
// 	fuel: 7.9,
// 	mpg: 37,

// 	range() {
// 		return this.fuel * this.mpg;
// 	}
// };

// Factories can make the code even simpler:

// Reducing Duplication is important, but it is not the main goal. it's a side effect.
// A large goal is understanding. It's easier to understand and maintain.

function makeCar(fuel, mpg) {
	return {
		fuel,
		mpg,

		range() {
			return this.fuel * this.mpg;
		},
	};
}

let car = makeCar(7.9, 37);
console.log(car.range()); // 292.3

let truck = makeCar(12, 50);
console.log(truck.range()); // 600

let scooter = makeCar(6, 20);
console.log(scooter.range()); // 120

// can also be expressed as variables, but the complexity can grow really high.
// OOP creates compartmentalization and modularization, which simplifies the program.

