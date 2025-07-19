// Immediately Invoked Function Expression

(function() {
	console.log('Hello');
})();

// trippy

let func = function() {
	console.log('hello');
}();

console.log(func); // undefined! that's crazy.

// With arguments:

console.log((function(a) {
	return a + 1;
})(2));

// 3