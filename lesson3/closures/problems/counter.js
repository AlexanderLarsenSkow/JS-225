/*
Create a makeCounterLogger function that takes a number as an 
argument and returns a function. When we invoke the returned 
function with a second number, it should count up or down from 
the first number to the second number, logging each number to the console:


first function: takes startNumber
second function: takes new number that is either below or above other number.

If below:
	count down to that number

If above:
	count up to that number.
*/

function makeCountLogger(start) {
	return function(finish) {
		if (start > finish) {
			for (let count = start; count >= finish; count -= 1) {
				console.log(count);
			}
		} else {
			for (let count = start; count <= finish; count += 1) {
				console.log(count);
			}
		}
	}
}

let countLog = makeCountLogger(5);
countLog(8);
countLog(2);