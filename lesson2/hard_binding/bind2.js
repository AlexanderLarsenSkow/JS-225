let car = {
	wheels: 4,
	paint: 'black;',

	info() {
		console.log(
			`Wheels: ${this.wheels}\n` +
			`Paint: ${this.paint}`
		);
	},
};

let motorcycle = {
	wheels: 2,
	paint: 'red',
};

car.info.call(motorcycle); // Wheels: 2 Paint: red

car.info = car.info.bind(car); // binding the info method to car

car.info.call(motorcycle); // Wheels: 4, Paint: black

// We can. We simply reassign the property to the bound version of the method.