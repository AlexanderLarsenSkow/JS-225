let Cessna152 = {
	fuelCapacity: 24.5,
	cruisingSpeed: 111,

	takeOff() {
		console.log('we are taking off.');
	},

	land() {
		console.log('we are landing.');
	},
};

Cessna152.takeOff();
Cessna152.land();