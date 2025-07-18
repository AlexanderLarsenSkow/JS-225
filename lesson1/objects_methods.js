let greeter = {
	morning() {
		console.log('Good morning!');
	}
}

function evening() {
	console.log('Good evening!');
}

// Functions and methods are called differently

greeter.morning(); // Good morning
evening(); // Good evening

// Can also assign the method to a variable:

let functionGreeter = greeter.morning;

functionGreeter(); // Good morning