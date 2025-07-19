// Partial Function Application

function primaryFunction(arg1, arg2) {
	console.log(arg1, arg2);
}

function generatorFunction(arg1) {
	return function(arg2) {
		return primaryFunction(arg1, arg2);
	}
}

let applicatorFunction = generatorFunction('Hello');
applicatorFunction('World');