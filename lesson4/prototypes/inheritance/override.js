let dog = {
	say() {
		console.log(this.name + ' says woof!');
	},
};

let fido = Object.create(dog);
fido.name = 'Fido';

fido.say = function() { // overriding here
	console.log(this.name + ' says woof woof woof!');
}

fido.say(); // Fido says woof woof woof!
console.log(fido); // { name: 'Fido', say: [Function: anonymous] }

let spot = Object.create(dog);
spot.name = 'Spot';
spot.say(); // Spot says woof!
