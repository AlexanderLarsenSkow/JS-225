function greet(greeting, name) {
	const capitalize = string => {
		return string[0].toUpperCase() + string.slice(1);
	}

	console.log(`${capitalize(greeting)}, ${name}!`);
}

greet('Howdy', 'Joe');
greet('good morning', 'Sue');

function makeGreeting(greeting) {
	return function(name) {
		return greet(greeting, name);
	};
}

let sayHi = makeGreeting('hi');
let sayHello = makeGreeting('hello');

sayHello('Brandon');
sayHi('Sarah');