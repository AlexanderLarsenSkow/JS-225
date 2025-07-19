function helloFactory(name) {
	return function() {
		console.log(`Hello ${name}!`);
	}
}

let greetJohn = helloFactory('John');
let greetAlex = helloFactory('Alex');

greetJohn(); // Hello John!
greetAlex(); // Hello Alex!