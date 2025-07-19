// function() {
//   console.log("Sometimes, syntax isn't intuitive!")
// }();

// The code will not run because it is not a function expression.

// SyntaxError: Function statements require a function name.

// Working IIFE:

(function() {
	console.log("Sometimes, syntax isn't intuitive!");
})();

// Sometimes, syntax isn't intuitive!