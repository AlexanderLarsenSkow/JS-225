/*
JS looks in object for method first, then in obj proto, then up the chain
*/

class Animal {}

Animal.prototype.foo = function() {
  console.log('this is foo');
};

Animal.prototype.bar = function() {
  console.log('this is bar');
};

console.log(Animal.prototype);
// { foo: [Function (anonymous)],
//   bar: [Function (anonymous)] }

function Vehicle() {}

Vehicle.prototype.drive = function() {
  console.log('off we go');
};

console.log(Vehicle.prototype);
// { drive: [Function (anonymous)] }

let animal = new Animal();
let vehicle = new Vehicle();

animal.foo(); // this is foo
animal.bar(); // this is bar
vehicle.drive(); // off we go

// JS looks for the method up the chain until it either finds it or is null

// New Example:

class Mammal {
	foo() { console.log('Mammal.foo'); }
}

class Whale extends Mammal {
	foo() { console.log('Whale.foo'); }
}

class Beluga extends Whale {}

let beluga = new Beluga();
beluga.foo(); // Whale.foo
beluga.bar(); // TypeError