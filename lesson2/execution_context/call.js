let iPad = {
	name: 'iPad',
	price: 40000,
};

let kindle = {
	name: 'kindle',
	price: 30000,
};

function printLine(lineNumber, punctuation) {
	console.log(lineNumber + ': ' + this.name + ', ' + this.price / 100 + ' dollars' + punctuation);
}

printLine.call(iPad, 1, ';');
printLine.call(kindle, 2, '.');

// call can take additional arguments that can be applied to the initial function / method.