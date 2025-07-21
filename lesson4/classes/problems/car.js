class Vehicle {
	constructor(make, model) {
		this.make = make;
		this.model = model;
	}

	info() {
    return `${this.make} ${this.model}`;
	}
}

class Car extends Vehicle {
	getWheels() {
		return 4;
	}
}

class Motorcycle extends Vehicle {
	getWheels() {
		return 2;
	}
}

class Truck extends Vehicle {
	constructor(make, model, payload) {
		super(make, model);
		this.payload = payload;
	}

	getWheels() {
		return 6;
	}
}

let car = new Car('Ford', 'Focus');
let truck = new Truck('Dodge', 'Ram');
let cycle = new Motorcycle('Kawasaki', 'Firebird');

console.log(car.info()); 
console.log(truck.info());
console.log(cycle.info());

// class Car {
//   constructor(make, model) {
//     this.make = make;
//     this.model = model;
//   }

//   getWheels() {
//     return 4;
//   }

//   info() {
//     return `${this.make} ${this.model}`;
//   }
// }

// class Motorcycle {
//   constructor(make, model) {
//     this.make = make;
//     this.model = model;
//   }

//   getWheels() {
//     return 2;
//   }

//   info() {
//     return `${this.make} ${this.model}`;
//   }
// }

// class Truck {
//   constructor(make, model, payload) {
//     this.make = make;
//     this.model = model;
//     this.payload = payload;
//   }

//   getWheels() {
//     return 6;
//   }

//   info() {
//     return `${this.make} ${this.model}`;
//   }
// }