// let studentId = 0;

// function generateStudentId() {
//   studentId += 1;
//   return studentId;
// }

// This code has a problem as the uniqueness of the studentId might be in doubt if left to 
// another developer.

// This also has an issue where we reassign studentId, which could mess up the uniqueness of ID's.

// IIFE can fix this:

let generateStudentId = (function() {
	let studentId = 0;

	return function() {
		studentId += 1;
		return studentId;
	}
})();

console.log(generateStudentId()); // 1
console.log(generateStudentId()); // 2
console.log(generateStudentId()); // 3