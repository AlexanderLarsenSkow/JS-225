let numbers = [1, 2, 3, 4];
function checkEven(number) {
  return number % 2 === 0;
}

numbers.filter(checkEven); // [2, 4]

/*
	Filter is a High order function because it takes the checkEven function as an argument.
	checkEven does not take a function or return a function, so it is not an example of a high order 
	function here.
*/