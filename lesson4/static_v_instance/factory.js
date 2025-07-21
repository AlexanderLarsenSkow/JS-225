let allDogs = [];

function makeDog(name, weight) {
	let dog = {
		name,
		weight,
	};

	allDogs.push(dog);
	return dog;
}

let dog1 = makeDog('Joey', 12);
console.log(allDogs);