// Problem: all properties are publicly available.

// function createAndLogPet() {
// 	let myPet = {
// 		type: 'Dog',
// 		name: 'Spot',
// 	};

// 	console.log(`I have a ${myPet.type} named ${myPet.name}!`);
// }

// If we're unsure if there is another function by the same name, we can
// simply use an IIFE to avoid any naming issues.

(function(type, name) {
	let myPet = {
		type,
		name,
	};

	console.log(`I have a ${myPet.type} named ${myPet.name}!`);
})('Dog', 'Spot');
