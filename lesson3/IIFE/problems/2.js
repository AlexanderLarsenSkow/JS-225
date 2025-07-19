var sum = 0;
var numbers;

sum += 10;
sum += 31;

numbers = [1, 7, -3, 3];

// function sum(arr) {
//   return arr.reduce(function(sum, number) {
//     sum += number;
//     return sum;
//   }, 0);
// }

sum += (function(arr) {
	return arr.reduce((total, number) => total + number, 0);
})(numbers);

console.log(sum); // 49
// sum += sum(numbers);  // ?

/*
The problem in this code was that sum was conflicting with the var variable, the function
variable name, and the sum local variable inside the reduce callback function.

An IIFE removes the need to name the function and solves this issue.
*/