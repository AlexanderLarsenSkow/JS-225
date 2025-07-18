let message = 'Hello from the global scope!';

function func(message) {
  message = 'Hello from the function scope!';
  console.log(message);
}

func(message); // Hello from the function scope!
console.log(message); // Hello from the global scope!

//  This is an example of shadowing. The message parameter /local var inside func's body
	// shadows the outer variable message