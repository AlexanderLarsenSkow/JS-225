function Vehicle(color, weight) {
	this.color = color;
	this.weight = weight;
}

Vehicle.prototype.accelerate = function() {
	console.log('We\'re going faster!');
}

Vehicle.prototype.decelerate = function() {
	console.log('We\'re slowing down!');
}

function Car(color, weight, licenseNumber) {
	Vehicle.call(this, color, weight);
	this.licenseNumber = licenseNumber;
}

Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

Car.prototype.honk = function() {
	console.log('Get outta my way!');
}

function Boat(color, weight, homePort) {
	Vehicle.call(this, color, weight);
	this.homePort = homePort;
}

Boat.prototype = Object.create(Vehicle.prototype);
Boat.prototype.constructor = Boat;

Boat.prototype.dropAnchor = function() {
	console.log('We have seabed!');
}

function AirPlane(color, weight, airlineName) {
	Vehicle.call(this, color, weight);
	this.airlineName = airlineName;
}

AirPlane.prototype = Object.create(Vehicle.prototype);
Boat.prototype.constructor = AirPlane;

AirPlane.prototype.land = function() {
	console.log('We\'re coming in for a hot landing!');
}

AirPlane.prototype.takeOff = function() {
	console.log('We\'re climbing higher captain!');
}

let car = new Car('black', 4000, '1A5 021');
let boat = new Boat('white', 5000, 'Atlanta');
let plane = new AirPlane('gold', 10000, 'Delta');

car.honk();
boat.dropAnchor();
plane.takeOff();
plane.land();

car.accelerate();
boat.decelerate();
plane.accelerate();