function logIt(string) {
	console.log(string);
}


console.log(module);
console.log(exports); // {}

module.exports = logIt;

// const logIt = require('/.logit')
// logIt('You rock!');