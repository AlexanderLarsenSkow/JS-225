function partial(primaryFunc, arg1) {
	return function(arg2) {
		return primaryFunc(arg1, arg2);
	};
}

function add(a, b) {
	return a + b;
}

function repeat(count, string) {
	let result = '';

	for (let i = 0; i < count; i += 1) {
		result += string;
	}

	return result;
}

let add10 = partial(add, 10);
console.log(add10(20)); // 30

let repeat3 = partial(repeat, 3); 
console.log(repeat3('Hello!')); // Hello!Hello!Hello!