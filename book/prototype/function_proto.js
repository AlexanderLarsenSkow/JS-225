class Animal {}

Animal.prototype.foo = function () {
	console.log('This is foo');
}

Animal.prototype.bar = function () {
	console.log('This is bar');
}

console.log(Animal.prototype); // { foo: [Function (anonymous)], bar: [Function (anonymous)] }

function Vehicle() {}

Vehicle.prototype.drive = function() {
	console.log('Off we go');
}

console.log(Vehicle.prototype); // { drive: [Function (anonymous)] }
