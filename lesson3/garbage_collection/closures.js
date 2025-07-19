function makeArrayLogger(arr) {
	return function() {
		console.log(arr);
	};
}

let logger = makeArrayLogger([1, 2, 3]);
logger();

// JS can't garbage collect [1, 2, 3] because the logger function maintains a reference to it.
// Closures!

logger = null;
// Assign to null and this gets rid of the reference to the array.