Array.prototype.count = function(arg) {
	let selection;

	if (typeof arg === 'function') {
		let func = arg;

		selection = this.filter((value, index, arr) => func(value, index, arr));
	} else {
		selection = this.filter(value => value === arg);
	}

	return selection.length;
}

console.log([1, 2, 3].count(num => num > 1)); // 2
console.log([3, 3, 3, 3, 3, 2].count(3)); // 5

// Check the number of keys that are longer than 1 character

let obj = {
	a: 1,
	b: 2,
	abc: 3,
	xzy: 4,
};

console.log(Object.keys(obj).count(key => key.length > 1)); // 2

// Check how many animals are in the calling array

let animals = ['badger', 'wolf', 'fox', 'bear'];

console.log(['dog', 'cat', 'wolf', 'lion'].count(animal => {
	return animals.includes(animal);
})); // 1

// Check if the elements are the same at the same index in the calling array and other array

console.log(['badger', 'bear', 'fox', 'wolf'].count((_, index, arr) => {
	return arr[index] === animals[index];
})); // 2
