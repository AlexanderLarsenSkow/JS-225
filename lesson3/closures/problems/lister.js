function makeMultipleLister(baseLine) {
	return function() {
		let count = baseLine;

		while (count < 100) {
			console.log(count);
			count += baseLine;
		}
	}
}

let lister = makeMultipleLister(13);
lister();

// > lister();
// 13
// 26
// 39
// 52
// 65
// 78
// 91