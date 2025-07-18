// Primitives are Immutable

function change(a) {
	a = 2;
	console.log(a); // 2
}

// let b = 1;
// change(b);
// console.log(b); // still 1

// Objects are Mutable.

function increment(thing) {
	thing.count += 1;
	console.log(thing.count, thing);
}

let counter = {
	count: 0,
};

increment(counter); // 1, { count: 1 }