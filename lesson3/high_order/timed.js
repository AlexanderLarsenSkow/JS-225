function timed(func) {
	return function() {
		let start = new Date();
		func();
		let stop = new Date();
		console.log((stop - start).toString() + 'ms have elapsed.');
	}
}

function looper() {
	let sum = 0;

	for (let i = 0; i < 10000000000; i += 1) {
		sum += i;
	}

	console.log(sum);
}

let timeLooper = timed(looper);
timeLooper();

