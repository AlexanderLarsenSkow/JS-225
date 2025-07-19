// Functions close over data in their scope, which is why they're called closures.
// They always have access to those values.

// Only closes over values / variables that it needs. Won't include ones it doesn't use.

function makeCounter() {
	let count = 0;
	return function() {
		count += 1;
		console.log(count);
	};
}

let counter = makeCounter();
counter(); // 1
counter(); // 2

let counter2 = makeCounter();
counter2(); // 1


// count not accessible outside the closure. Private data!
console.log(counter.count); // undefined