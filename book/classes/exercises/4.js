class Vehicle {
	constructor(color, weight) {
		this.color = color;
		this.weight = weight;
	}

	accelerate() {
		console.log('We\'re going faster!');
	}

	decelerate() {
		console.log('We\'re slowing down!');
	}
}

class Car extends Vehicle {
	constructor(color, weight, licenseNumber) {
		super(color, weight);
		this.licenseNumber = licenseNumber;
	}

	honk() {
		console.log('Get outta my way!');
	}
}

class Boat extends Vehicle {
	constructor(color, weight, homePort) {
		super(color, weight);
		this.homePort = homePort;
	}

	dropAnchor() {
		console.log('We have seabed!');
	}
}

class AirPlane extends Vehicle {
	constructor(color, weight, airlineName) {
		super(color, weight);
		this.airlineName = airlineName;
	}

	takeOff() {
		console.log('We\'re climbing higher captain!');
	}

	land() {
		console.log('We\'re coming in for a hot landing!');
	}
}

let car = new Car('black', 4000, '1A5 021');
let boat = new Boat('white', 5000, 'Atlanta');
let plane = new AirPlane('gold', 10000, 'Delta');

// car.honk();
// boat.dropAnchor();
// plane.takeOff();
// plane.land();


console.log(car instanceof Vehicle); // true 
console.log(boat instanceof Vehicle); // true
console.log(car instanceof Car); // true
console.log(boat instanceof Car); // false, boat is not an instance of the Car class.