let counter = {
	count: 0,
	
	advance() {
		this.count += 1; // this references the count property in this object.
	}
}

counter;

counter.advance();
console.log(counter); // { count: 1, advance: [Function: advance] }

counter.advance();
console.log(counter); // { count: 2, advance: [Function: advance] }

counter.advance();
console.log(counter); // { count: 3, advance: [Function: advance] }

// Object Methods are props that have a function as a value:

let car = {
	fuel: 8,
	running: false,

	start() {
		this.running = true; // changing the running prop to true
	}
}

console.log(car); // { fuel: 8, running: false, start: [Function: start] }
car.start();
console.log(car); // { fuel: 8, running: true, start: [Function: start] }

// add methods whenver you want:

car.stop = function() {
	this.running = false;
}

car.stop();
console.log(car.running); // false