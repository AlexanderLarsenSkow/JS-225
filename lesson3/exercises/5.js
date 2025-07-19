function myBind(func, context, ...partialArgs) {
	return function(...args) {
		const fullArgs = args.concat(partialArgs);

		return func.apply(context, fullArgs);
	}
}

function addNumbers(a, b) {
	return a + b;
}

const addFive = myBind(addNumbers, null, 5);

console.log(addFive(10)); // 15