/*
Write a program that uses two functions, add and subtract, 
to manipulate a running total value. When you invoke either 
function with a number, it should add or subtract that number 
from the running total and log the new total to the console. Usage looks like this:

runningTotal starts at 0;

a makeRunningTotal function
start runningTotal at 0;

has two inner functions, add and subtract...
*/

function makeRunningTotal() {
	let runningTotal = 0;

	let add = number => {
		runningTotal += number;
		console.log(runningTotal);
	};

	let subtract = number => {
		runningTotal -= number;
		console.log(runningTotal);
	}

	return [add, subtract];
}

let [add, subtract] = makeRunningTotal();

add(1); // 1
add(42); // 43
subtract(39); // 4
add(6); // 10

/*
> add(1);
1
> add(42);
43
> subtract(39);
4
> add(6);
10
*/